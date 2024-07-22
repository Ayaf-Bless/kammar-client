export function addLineBreaks(text: string, interval = 4) {
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    if ((i + 1) % interval === 0 && i !== words.length - 1) {
      words[i] += "<br />";
      break; // Only add one <br /> tag
    }
  }

  return words.join(" ");
}
