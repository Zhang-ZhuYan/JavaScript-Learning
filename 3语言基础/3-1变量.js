function test() {
  console.log(a2);  // undefined
  // console.log(c);  // 报错
  // const b;  // 报错
  let c;
  // console.log(a1) // 报错
  a1 = 1; // 全局变量
  var a2;
}
test();
console.log(a1) // 1
