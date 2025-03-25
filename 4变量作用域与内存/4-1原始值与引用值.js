/**
 * 原始用值 栈内存
 * 7个基本类型：Number、String、Boolean、Null、Undefined、Symbol、BigInt
 * 特点：原始值不可改变，修改原始值时会创建一个新值
 *       原始值在赋值和传递时，会复制其值
 * **/
let a = 1;
let b = a; // 复制a的值
b = 2; // 改变b的值，不会影响a
console.log(a, b)

/** 
 * 引用值 堆内存
 * Object、Array、Function、Date、RegExp、其他内置对象
 * 特点：引用值是可变的，修改对象属性值会影响所有引用该对象的变量
 *       引用值在传递时，复制的是其引用地址，而不是变量本身 
 */
const a1 = {};
a1.name = 2;
const b1 = a1;
b1.name = 3;
console.log(a1.name, b1.name) // 3 3