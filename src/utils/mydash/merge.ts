import isPlainObject from './isPlainObject';

type Indexed<T = unknown> = {
  [key in string]: T;
};

type IndexedOrUnknown = Indexed | unknown;

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  const result: Indexed = {};

  if (!isPlainObject(lhs) && isPlainObject(rhs)) {
    return Object.assign({}, rhs);
  }
  if (!isPlainObject(rhs) && isPlainObject(lhs)) {
    return Object.assign({}, lhs);
  }

  for (const [key, value] of Object.entries(rhs)) {
    const lhsValue: IndexedOrUnknown = lhs[key];
    if (
      isPlainObject(value) &&
      isPlainObject(lhsValue)
    ) {
      result[key] = merge(lhsValue as Indexed, value as Indexed);
    }
    if (!isPlainObject(lhsValue)) {
      if (isPlainObject(value)) {
        result[key] = Object.assign({}, value);
      } else {
        result[key] = value;
      }
    }
  }

  for (const [key, value] of Object.entries(lhs)) {
    const resultEl: IndexedOrUnknown = result[key];
    if (resultEl === undefined) {
      if (isPlainObject(value)) {
        result[key] = Object.assign({}, value);
      } else {
        result[key] = value;
      }
    }
  }

  return result;
}

console.log(merge({a: 111, d: 5}, {a: {b: {c: {d: {f: {g: 555}}}}}}));

// export default merge;