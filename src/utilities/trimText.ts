export default function trimText(text: string) {
  const lengthCeiling = 100;
  if (text.length <= lengthCeiling) {
    return text;
  }
  for (let i = lengthCeiling; lengthCeiling < text.length; i++) {
    if (text[i] === '.') return text.slice(0, i) + ' ...';
  }
  return text;
}
