function trim(value: string, param?: string) {
  if (!param) {
    return value.trim();
  }
  
  return value;
}

console.log(trim('   \xA0hello, world!   '));