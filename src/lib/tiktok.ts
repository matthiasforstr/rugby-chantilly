import postsFile from '../content/tiktok/posts.json';
import fs from 'node:fs';
import path from 'node:path';

export interface TikTokPost {
  id: string;
  url: string;
  caption?: string;
}

export interface TikTokEmbed {
  id: string;
  url: string;
  caption?: string;
  html: string | null;
  thumbnail_url: string | null;
  title: string | null;
  author_name: string | null;
}

interface OEmbedResponse {
  html?: string;
  thumbnail_url?: string;
  title?: string;
  author_name?: string;
}

const CACHE_DIR = path.resolve(process.cwd(), 'src/content/tiktok-cache');

function ensureCacheDir() {
  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function cachePath(id: string) {
  return path.join(CACHE_DIR, `${id}.json`);
}

function readCache(id: string): OEmbedResponse | null {
  try {
    const p = cachePath(id);
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function writeCache(id: string, data: OEmbedResponse) {
  ensureCacheDir();
  fs.writeFileSync(cachePath(id), JSON.stringify(data, null, 2));
}

async function fetchOEmbed(url: string): Promise<OEmbedResponse | null> {
  try {
    const endpoint = `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`;
    const res = await fetch(endpoint, {
      headers: { 'User-Agent': 'Mozilla/5.0 rugby-chantilly-build' },
    });
    if (!res.ok) {
      console.warn(`[tiktok] oEmbed fetch failed: ${res.status} for ${url}`);
      return null;
    }
    return (await res.json()) as OEmbedResponse;
  } catch (err) {
    console.warn(`[tiktok] oEmbed error for ${url}:`, err);
    return null;
  }
}

export function getTikTokPosts(): TikTokPost[] {
  // Pages CMS stores the array under "list" key
  const data = postsFile as unknown as { list?: TikTokPost[] } | TikTokPost[];
  if (Array.isArray(data)) return data;
  return data.list ?? [];
}

export async function getTikTokEmbeds(): Promise<TikTokEmbed[]> {
  const posts = getTikTokPosts();
  const results: TikTokEmbed[] = [];

  for (const p of posts) {
    let cached = readCache(p.id);
    if (!cached) {
      const fresh = await fetchOEmbed(p.url);
      if (fresh) {
        writeCache(p.id, fresh);
        cached = fresh;
      }
    }
    results.push({
      id: p.id,
      url: p.url,
      caption: p.caption,
      html: cached?.html ?? null,
      thumbnail_url: cached?.thumbnail_url ?? null,
      title: cached?.title ?? null,
      author_name: cached?.author_name ?? null,
    });
  }

  return results;
}
