function templateStr(str, aVal, bVal) {
  console.info(str, aVal, bVal);
  return str;
}
const a = 1;
const b = 2;
let c = templateStr`${a}.${b}`
console.log(c) 