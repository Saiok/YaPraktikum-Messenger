export function charsEndIndex(valueChars: string[], paramChars: string[]): number {
  let isBreak = true;
  let end = valueChars.length - 1;
  let result: number;

  while (isBreak) {
    if (end < 0) {
      isBreak = false;
    }
    if (paramChars.indexOf(valueChars[end]) !== -1) {
      --end;
    } else {
      result = end;
      isBreak = false;
    }
  }

  return result + 1;
}