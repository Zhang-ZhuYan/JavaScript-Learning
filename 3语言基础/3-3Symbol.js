// 用于表示唯一的表示符，主要用于解决对象属性命名冲突问题

// 即使描述相同，值也是不唯一的
const a = Symbol('id');
const b = Symbol('id');
console.log(a == b);

//symbol作为对象的属性
const key = Symbol();
const object1 = {
  arg1: 1,
  [key]: 2,
}
console.log(object1[key]) // 2
console.log(Object.keys(object1)) // ['arg1'] symbol作为属性值不可枚举
console.log(Object.getOwnPropertySymbols(object1)) //[Symbol()] 打印出object1的symbol属性

// 全局Symbol注册表
const global1 = Symbol.for('global');
const global2 = Symbol.for('global');
console.log(global1 == global2); // true
console.log(Symbol.keyFor(global1)) // global




