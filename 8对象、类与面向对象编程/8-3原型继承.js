function Animal(name) {
  this.name = name;
  this.colors = [];
}

Animal.prototype.sayName = function() {
    console.log('my name is ' + this.name, this.color);
}

function Rabbit(name, color) {
    Animal.call(this, name); //借用构造函数  解决无法向父类传参问题
    this.color = color
}

Rabbit.prototype = Object.create(Animal.prototype); // 也可以 new Animal()缺点，调用了一次构造函数
Rabbit.prototype.constructor = Rabbit;  // 上一步重写了protptype 导致constructor指向Aminal，所以要修正constructor的指向

Rabbit.prototype.jump = function() {
    console.log('jumping');
}

const rabbit = new Rabbit('zhangsan', 'black');
rabbit.colors.push('red')
rabbit.sayName();
rabbit.jump();

const rabbit2 = new Rabbit('lisi', 'white');
rabbit2.colors.push('yellow');
console.log(rabbit2.colors);