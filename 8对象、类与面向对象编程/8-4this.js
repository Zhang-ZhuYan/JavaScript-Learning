/**
 * 普通绑定
 */
function fn1 () {
    console.log(this);
}

// 普通函数，this指向全局对象，浏览器环境指向window，node环境指向global，严格模式下，undefined
fn1(); 

/**
 * 隐式绑定
 */
const obj1 = {
    name: 'zhangsan',
    sayName() {
        console.log(this)
    }
}
//作为对象的方法被调用时，this指向调用该方法的对象
obj1.sayName(); // obj1

// 当方法被赋值给变量后，会丢失原来的this
const sayName = obj1.sayName;
sayName(); // 指向全局对象而不是obj1

/**
 * 显示绑定 bind、apply、call
 */
function greet(arg1, arg2) {
  console.log(`hello ${this.name}`, arg1, arg2)
}
const people1 = {
    name: 'zhangsan'
}
const people2 = {
    name: 'lisi'
}
const people3 = {
    name: 'wangwu'
}
// apply和call区别接受参数的形式
greet.apply(people1, [1,2]) // 参数数组
greet.call(people2, 1,2) // 参数列表

const greet2 = greet.bind(people3); // 返回一个新函数
greet2(1,2)

/**
 * new 绑定
 */
function fn2 (name) {
    this.name = name;
}
const fn2instance = new fn2('zhangsan')
console.log(fn2instance.name) // this指向构造函数创建的对象实例

/**
 * 箭头函数，箭头函数没有this，指向定义时外层作用域的this
 */
const obj3 = {
    name: 'zhangsan',
    say() {
        setTimeout(() => {
            console.log(this.name) // 调用时指向say的this，也就是obj3 
        })
    },
    say1() {
        setTimeout(function() {
            console.log(this.name) // undefined
        })
    }
}
obj3.say();
obj3.say1();
