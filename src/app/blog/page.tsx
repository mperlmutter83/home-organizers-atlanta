import { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, toRenderPost, type RenderPost } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, insights, and expert advice on home and office organization from Home Organizers Atlanta.',
};

const SITE_DOMAIN = 'homeorganizersatlanta.com';

export const revalidate = 60;

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const posts: RenderPost[] = apiPosts.map(toRenderPost);

  return (
    <>
      <section className="bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 text-lg">Tips, insights, and expert advice on home and office organization.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Latest Tips and Insights on Organization</h2>

          {posts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-gray-500 text-lg mb-2">New blog posts coming soon!</p>
              <p className="text-gray-600">We&apos;re working on bringing you valuable organization tips and insights.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  {post.image && (
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-teal-600 mb-2">{post.date} • {post.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
