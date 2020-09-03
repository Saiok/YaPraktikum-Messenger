function last(list) {
  if (!Array.isArray(list)) {
    return;
  }
  let length = list.length - 1;

  return length >= 0 ? list[length] : undefined;
}

module.exports = last;