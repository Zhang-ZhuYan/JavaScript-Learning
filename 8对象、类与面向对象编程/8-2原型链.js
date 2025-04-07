/**
 * 原型对象，每个对象都有一个原型对象（__proto__属性）（null除外），对象会继承原型对象的属性和方法
 */

const obj = {
    name: 'zhangsan'
}
const obj2 = {
    age: '12'
}
obj.__proto__ = obj2; // 继承obj2的age属性
console.log(obj.age) // 12；

/**
 * 构造函数与prototype
 * 每个构造函数都有一个prototype（原型对象），当使用new操作符时，__proto__指向构造函数的prototype
 */
function Animal(name) {
  this.name = name;
}

Animal.prototype.eats = true; // 添加属性到原型中

const rabbit = new Animal('rabbit');
console.log(rabbit.name, rabbit.eats); // rabbit  true
console.log(rabbit.__proto__ === Animal.prototype) // true


/**
 * 属性查找
 * 先查找自身的属性，
 * 接着查找__proto__，也就是Rabbit的prototype
 * 接着查找Rabbit.prototype.__proto__ (递归查找原型对象的__proto__)
 * 直到Object.prototype.__proto(为null)为止
 */
function Rabbit (color) {
    this.color = color;
}
Rabbit.prototype = new Animal('rabbit');
const whiteRabbit = new Rabbit('white');
console.log(whiteRabbit.color) // white;
console.log(whiteRabbit.eats) // true

console.log(
    whiteRabbit instanceof Rabbit,
    whiteRabbit instanceof Animal
) // true true
console.log(Animal.prototype.isPrototypeOf(whiteRabbit)) // 判断Animal的原型对象是否在whiteRabbit的原型链上 true
console.log(Object.getPrototypeOf(whiteRabbit)) // Rabbit.prototype = Aninmal.prototype ,所以输出Aminal{name: 'rabbit'}