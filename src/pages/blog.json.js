import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  const site = context.site ?? new URL('https://batubora.com');

  const items = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const url = new URL(`/blog/${post.id}/`, site).toString();
      return {
        id: url,
        url,
        title: post.data.title,
        summary: post.data.description,
        content_text: post.body,
        date_published: post.data.pubDate.toISOString(),
      };
    });

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: `${SITE_TITLE} blog`,
    description: SITE_DESCRIPTION,
    home_page_url: site.toString(),
    feed_url: new URL('/blog.json', site).toString(),
    items,
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
