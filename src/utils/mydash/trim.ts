import { customSplice } from './customSplice';
import { charsStartIndex } from './charsStartIndex';
import { charsEndIndex } from './charsEndIndex';

function trim(value: string, param?: string): string {
  if (param === undefined) {
    return value.trim();
  }
  if (!value || !param) {
    return (value || '');
  }

  const valueChars: string[] = value.split('');
  const paramChars: string[] = param.split('');
  const start: number = charsStartIndex(valueChars, paramChars);
  const end: number = charsEndIndex(valueChars, paramChars);
  // console.log({start, end});

  return customSplice(valueChars, start, end).join('');
}

console.log(trim('    -_-abc-_-', '_-'));