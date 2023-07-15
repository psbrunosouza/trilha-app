import chroma from 'chroma-js';

export function getContrastingTextColor(
  backgroundColor: string
): 'dark' | 'light' {
  const luminance = chroma(backgroundColor).luminance();
  return luminance > 0.5 ? 'dark' : 'light';
}
