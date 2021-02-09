export function charsStartIndex(valueChars: string[], paramChars: string[]): number {
  let isBreak = true;
  let start = 0;
  let result: number;

  while (isBreak) {
    if (start > valueChars.length) {
      isBreak = false;
    }
    if (paramChars.indexOf(valueChars[start]) !== -1) {
      ++start;
    } else {
      result = start;
      isBreak = false;
    }
  }
  return result;
}