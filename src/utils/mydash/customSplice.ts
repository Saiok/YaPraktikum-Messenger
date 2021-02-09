export function customSplice(array: unknown[], start: number, end: number): unknown[] {
  if (start !== 0) {
    array.splice(0, start);
    end = end - start;
  }
  if (end !== array.length - 1) {
    array.splice(end);
  }
  return array;
}