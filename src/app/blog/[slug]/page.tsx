import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, toRenderPost, type RenderPost } from '@/lib/api';

const SITE_DOMAIN = 'homeorganizersatlanta.com';

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

async function resolvePost(slug: string): Promise<RenderPost | undefined> {
  const apiPost = await getPost(SITE_DOMAIN, slug);
  if (apiPost) return toRenderPost(apiPost);
  return undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="text-gray-900">{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key} className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-2">
          {listBuffer.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  blocks.forEach((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter((l) => l.trim().startsWith('- '));
      listBuffer.push(...items.map((l) => l.trim().slice(2)));
      return;
    }

    flushList(`list-${idx}`);

    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={idx} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{renderInline(trimmed.slice(4))}</h3>
      );
    } else if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-12 mb-5">{renderInline(trimmed.slice(3))}</h2>
      );
    } else {
      elements.push(
        <p key={idx} className="text-gray-700 text-lg leading-relaxed mb-6">{renderInline(trimmed)}</p>
      );
    }
  });

  flushList('list-final');
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-teal-600 hover:text-teal-700 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-teal-600 text-sm mb-4">{post.date} • {post.category}</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">{post.title}</h1>
        </div>
      </section>

      {post.image && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img src={post.image} alt={post.title} className="w-full rounded-2xl shadow-lg" />
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent(post.content)}
        </div>
      </section>
    </>
  );
}
