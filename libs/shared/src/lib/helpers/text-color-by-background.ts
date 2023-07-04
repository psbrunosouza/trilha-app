import chroma from 'chroma-js';

export function textColorByBackground(
  backgroundColor: string
): 'black' | 'white' {
  const bgColorHSL = chroma(backgroundColor).hsl();

  const brightness = bgColorHSL[2];

  if (brightness > 0.5) {
    return 'black';
  } else {
    return 'white';
  }
}
