import { NextResponse } from 'next/server';

/**
 * GET /api/posts — machine-readable blog feed for the Yes Crew CRM.
 *
 * This site's posts live in the centralized blog store (yescrew-dashboard
 * blog_posts). We proxy that API with ?include=scheduled so the CRM content
 * sync can mirror upcoming scheduled posts, matching the network feed
 * contract: { slug, title, category, date, publishedAt, status, url }.
 */

export const dynamic = 'force-dynamic';

const SITE_DOMAIN = 'homeorganizersatlanta.com';
const CENTRAL_API = `https://yescrew-dashboard.vercel.app/api/posts?site=${SITE_DOMAIN}&include=scheduled`;

/** Current date in America/Los_Angeles as YYYY-MM-DD. */
function getTodayLA(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
}

function displayDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}

interface CentralPost {
  slug: string;
  title: string;
  category: string | null;
  publish_at: string | null;
  created_at: string;
}

export async function GET() {
  try {
    const res = await fetch(CENTRAL_API, { cache: 'no-store' });
    if (!res.ok) return NextResponse.json([]);
    const data = await res.json();
    const today = getTodayLA();

    const response = ((data.posts ?? []) as CentralPost[]).map((post) => {
      const iso = post.publish_at || post.created_at;
      const publishedAt = iso ? iso.slice(0, 10) : null;
      return {
        slug: post.slug,
        title: post.title,
        category: post.category,
        date: iso ? displayDate(iso) : null,
        publishedAt,
        status: publishedAt && publishedAt <= today ? 'published' : 'scheduled',
        url: `https://www.homeorganizersatlanta.com/blog/${post.slug}`,
      };
    });

    return NextResponse.json(response);
  } catch {
    return NextResponse.json([]);
  }
}
