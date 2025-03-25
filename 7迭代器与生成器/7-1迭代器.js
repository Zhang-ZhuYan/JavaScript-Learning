/**
 * （1）迭代器协议
 *     迭代器对象必须实现 next() 方法，该方法返回一个包含以下属性的对象：
 *       value：当前迭代的值。
 *       done：布尔值，表示迭代是否完成。
 */

function createCounter(start, end) {
  let count = start;
  return {
    next() {
      if (counter <= end) {
        return { value: count++, done: false }
      } else {
        return { value: undefined, done: true }
      }
    }
  }
}

const counter = createCounter(1, 3);
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())

/**
 * 自定义可迭代对象
 */

const obj = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => { // 这边要使用箭头函数，不然取不到this.data
        if (index < this.data.length) {
          return { value: this.data[index++], done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (let temp of obj) {
  console.log(temp)
}

const arr = [1, 2, 3, 4, 5]
for (let temp of arr) {
  console.log(temp)
}

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (let [key, value] of map) {
  console.log(key, value)
}

const set = new Set([1, 2, 3]);
for (let temp of set) {
  console.log(temp)
}

const str = '123456';
for (let temp of str) {
  console.log(temp)
}