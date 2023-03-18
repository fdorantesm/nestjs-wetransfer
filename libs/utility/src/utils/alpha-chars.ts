export function getAlphaChars() {
  return []
    .concat(
      Array.from(Array(10)).map((e, i) => i + 48),
      Array.from(Array(26)).map((e, i) => i + 65),
      Array.from(Array(26)).map((e, i) => i + 97),
    )
    .map((x) => String.fromCharCode(x));
}
