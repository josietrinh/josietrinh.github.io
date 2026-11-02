// woodcut motifs, drawn in the tile's paper colour on top of its ink colour
export const motifs: Record<string, string> = {
  rays: '<path d="M0 0 L100 38 L100 52 Z M0 0 L82 100 L62 100 Z M0 0 L100 8 L100 20 Z M0 0 L34 100 L18 100 Z" />',
  ripples: '<g fill="none" stroke-width="7"><circle cx="40" cy="44" r="12"/><circle cx="40" cy="44" r="28"/><path d="M8 88 C 30 70, 70 70, 96 86"/></g><circle cx="40" cy="44" r="4"/>',
  stars: '<path d="M22 14 l4 9 10 1 -8 6 3 10 -9 -6 -9 6 3 -10 -8 -6 10 -1z M70 30 l3 7 8 1 -6 5 2 8 -7 -4 -7 4 2 -8 -6 -5 8 -1z M44 66 l5 11 12 1 -9 8 3 12 -11 -7 -11 7 3 -12 -9 -8 12 -1z M84 76 l2 5 6 1 -4 3 1 6 -5 -3 -5 3 1 -6 -4 -3 6 -1z"/>',
  waves: '<g fill="none" stroke-width="6" stroke-linecap="round"><path d="M-4 24 C 14 12, 30 36, 50 24 S 86 12, 104 24"/><path d="M-4 50 C 14 38, 30 62, 50 50 S 86 38, 104 50"/><path d="M-4 76 C 14 64, 30 88, 50 76 S 86 64, 104 76"/></g>',
  sparkle: '<path d="M50 4 C 54 38, 62 46, 96 50 C 62 54, 54 62, 50 96 C 46 62, 38 54, 4 50 C 38 46, 46 38, 50 4 Z"/>',
  dots: '<g>' + Array.from({ length: 22 }, (_, i) => `<ellipse cx="${(i * 37) % 92 + 6}" cy="${(i * 53) % 90 + 6}" rx="${4 + (i % 3) * 2}" ry="${3 + (i % 2) * 2}"/>`).join('') + '</g>',
  streaks: '<g stroke-width="7" stroke-linecap="round"><path d="M10 40 L44 8"/><path d="M14 74 L70 18"/><path d="M40 92 L92 40"/><path d="M74 96 L96 74"/></g>',
  sunrise: '<path d="M14 100 A36 36 0 0 1 86 100 Z"/><g stroke-width="5" stroke-linecap="round"><path d="M50 52 L50 38"/><path d="M22 62 L12 52"/><path d="M78 62 L88 52"/><path d="M8 84 L0 82"/><path d="M92 84 L100 82"/></g>',
  leaf: '<path d="M18 86 C 18 40, 50 14, 88 12 C 86 52, 60 84, 18 86 Z"/><path d="M22 82 L80 18" fill="none" stroke-width="3"/>',
};
export const svg = (name: string) =>
  `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g class="m">${motifs[name] ?? motifs.sparkle}</g></svg>`;
