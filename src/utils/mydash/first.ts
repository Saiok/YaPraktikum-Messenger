export function first<T>(list: T[]): T | undefined {
  if (!Array.isArray(list)) {
    return;
  }

  return list[0];
}