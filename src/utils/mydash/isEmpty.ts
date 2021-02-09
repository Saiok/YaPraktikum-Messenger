interface Args {
  length: number,
  size: number,
  splice?: <F>() => F
}

declare global {
  interface Number {
    MAX_SAFE_INTEGER: number;
  }
}

function isLength<T>(value: T): boolean {
  return (
    typeof value === 'number' &&
    value > -1 &&
    value % 1 === 0 &&
    value <= Number.MAX_VALUE
  );
}

function isNil<T>(value: T): boolean {
  return value === null || value === undefined;
}

function isArrayLike<T extends Args>(value: T): boolean {
  return !isNil(value) && typeof value !== 'function' && isLength(value.length);
}

function isObjectLike<T>(value: T): boolean {
  return typeof value === 'object' && value !== null;
}

function getTag<T>(value: T): string {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

const objectProto = Object.prototype;
function isPrototype<T>(value: T): boolean {
  const ctor = value && value.constructor;
  const proto = (typeof ctor === 'function' && ctor.prototype) || objectProto;

  return value === proto;
}

function isArguments<T>(value: T): boolean {
  return isObjectLike(value) && getTag(value) === '[object Arguments]';
}

export function isEmpty<T extends Args>(value: T): boolean {
  if (value === null) {
    return true;
  }

  if (
    isArrayLike(value) &&
    (Array.isArray(value) ||
      typeof value === 'string' ||
      typeof value.splice === 'function' ||
      isArguments(value))
  ) {
    return !value.length;
  }

  const tag = getTag(value);
  if (tag === '[object Map]' || tag === '[object Set]') {
    return !value.size;
  }

  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }

  for (const key in value) {
    if (Object.hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}