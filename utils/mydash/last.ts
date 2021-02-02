export function last<T>(list: T[]): T | undefined {
  if (!Array.isArray(list)) {
    return;
  }
  const length = list.length - 1;

  return length >= 0 ? list[length] : undefined;
}