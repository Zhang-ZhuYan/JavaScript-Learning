/**
 * 按位与（&），每一位执行and操作，都为1时，结果为1，否则结果为0
 */
const a1 = 3; //  011
const a2 = 5; //  101
console.log(a1 & a2) // 001，输出1

/** 判断偶数 */
function isEven(num) {
  return (num & 1) === 0
}
console.log(isEven(5), isEven(2)) // false true

/** 
 * 按位或（|），每一位执行或操作，有一个为1，结果就为1
 */
let a = 5;    // 二进制: 0101
let b = 3;    // 二进制: 0011
let result = a | b; // 二进制: 0111
console.log(result); // 7

/** 合并权限标志 */
const READ = 1; // 001
const WRITE = 2; // 010
const permission = READ & WRITE; // 011 3
console.log(permission)

/**
 * 按位异或（^）, 相同结果为0，不同结果为1
 */
let result2 = a ^ b; // 0110  6

/** 两个数值交换 */
let x = 3, y = 5;
x = x ^ y; // 0110
y = x ^ y; // 0110 ^ 0101 = 0011 = 3
x = x ^ y; // 0110 ^ 0011 = 0101 = 5
console.log(x, y) // 5, 3

// 按位非（~），每一位取反，即一补码
let result3 = ~a; // 二进制: 1010（补码表示）
console.log(result3); // -6

/**
 * 左移（<<）,向左移动指定位数，右侧补0
 */
const a3 = 5;
const result4 = a3 << 2; // 0101 左移2位  010100 = 20
console.log(result4)

//计算2的幂
function powerOfTwo(n) {
  return 1 << n
}
console.log(powerOfTwo(3)) // 1 << 3 = 01 << 3 = 01000 = 8

// 有符号右移（>>）将操作数的二进制位向右移动指定的位数，左侧补符号位。
let a4 = -16;  // 二进制: 11110000（补码表示）
let result5 = a4 >> 2; // 二进制: 11111100
console.log(result5); // -4

// 除以2的幂
function divideByTwo(n) {
    return n >> 1;
}
console.log(divideByTwo(10)); // 5

/**
 * 无符号右移（>>>）
 * 将操作数的二进制位向右移动指定的位数，左侧补 0。
 */

let a5 = -16; // 二进制: 11110000（补码表示）
let result6 = a5 >>> 2; // 00111100 = 60
console.log(result6); // 4294967280
