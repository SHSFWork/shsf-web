export default function isLightColor(color: string): boolean {
  let r, g, b;

  if (color.startsWith("#")) {
    const hex = color.slice(1);

    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
  } else if (color.startsWith("rgb")) {
    const rgbValues = color.match(/\d+/g);
    if (rgbValues && rgbValues.length >= 3) {
      r = parseInt(rgbValues[0], 10);
      g = parseInt(rgbValues[1], 10);
      b = parseInt(rgbValues[2], 10);
    } else {
      return true;
    }
  } else {
    return true;
  }

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128;
}
