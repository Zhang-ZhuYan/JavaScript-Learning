// ++
let a1 = 1;
let a2 = 2;
let a3 = ++a2 + 1; // 先计算a2+1=3， 接着a2+1+1=4
console.log(a1, a2, a3) // 1 3 4

// ++
let b1 = 1;
let b2 = 2;
let b3 = b1++ + b2; // 先计算b3=b1+b2=3，接着b1=b1+1=2
console.log(b1, b2, b3) // 2 2 3

/**
 * 字符串：如果是数值形式，先转换成数值
 *        如果是非数值转换为NaN
 * 布尔值：true转化为1，false为0
 * 对象  ：先调用valueOf(),如果valueOf()返回NaN，调用toString();
 */
// 前置+ 或 -对数值计算没有影响，对于非对象，调用Number()，转换为数值

let str1 = '1';
let str2 = '1a'
console.log(+str1, +str2) // 1 NaN
console.log(++str1) // 2
console.log(++str2) // NaN
let boolean1 = true;
let boolean2 = false;
console.log(+boolean1, +boolean2) // 1 0
console.log(++boolean1) // 2
console.log(++boolean2) // 1
let obj1 = {
  valueOf() {
    return 1;
  },
  toString() {
    return 2;
  }
}
console.log(+obj1) // 1
console.log(++obj1) // 2

