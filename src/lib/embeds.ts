// turns a shared link into an embeddable iframe src, or null if we only link to it.
export type Embed = { src: string; kind: 'instagram' };

export function toEmbed(href: string): Embed | null {
  // instagram posts and reels, including /<user>/p/<code>/ share links
  const ig = href.match(/instagram\.com\/(?:[\w.]+\/)?(p|reel)\/([\w-]+)/);
  if (ig) return { src: `https://www.instagram.com/${ig[1]}/${ig[2]}/embed/`, kind: 'instagram' };
  return null;
}
