// 生成器是一种特殊的函数
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i // 暂停并返回值
  }
}

const generator = generateSequence(1, 4);
// console.log(generator.next())

for (let temp of generator) { // 生成器返回的既是迭代器，也是可迭代对象
  console.log(temp) // 1,2,3,4
}

// 生成器的高级用法
function* towWayGenerator() {
  const name = yield`你的名字`;
  yield`你好 ${name}`
}
const towWay = towWayGenerator();
console.log(towWay.next());
console.log(towWay.next('xxx'));