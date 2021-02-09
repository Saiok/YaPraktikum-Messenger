import isArrayOrObject from './isArrayOrObject';

type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isEqual(lhs: PlainObject, rhs: PlainObject): boolean {
  for (const [key, value] of Object.entries(lhs)) {
      const rightValue = rhs[key];
      if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
          if (isEqual(<PlainObject>value, <PlainObject>rightValue)) {
              continue;
          }
          return false;
      }

      if (value !== rightValue) {
          return false;
      }
  }

  return true;
}

export default isEqual;