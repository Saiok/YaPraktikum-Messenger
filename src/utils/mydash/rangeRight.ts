import { range } from './range';

export function rangeRight(start: number, end: number, step: number): number[] {
  if (!end) {
    end = start;
    start = 0;
  }
  if (!step && step !== 0) {
    step = start < end ? 1 : -1;
  }
  return range(start, end, step, true);
}