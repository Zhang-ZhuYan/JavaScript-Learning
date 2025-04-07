Function.prototype.myCall = function(context1, ...args) {
  const context = context1 || window || global;
  const symbol = Symbol('fn') // symbol作为属性名，防止冲突
  context[symbol] = this; // 将方法添加到context的属性
  const result = context[symbol](...args);
  delete context[symbol];
  return result;
}

Function.prototype.myApply = function(context1, args = []) {
    const context = context1 || window || global;
    const symbol = Symbol('fn') // symbol作为属性名，防止冲突
    context[symbol] = this; // 将方法添加到context的属性
    const result = context[symbol](...args);
    delete context[symbol];
    return result;
}

Function.prototype.myBind = function(context, ...bindArgs) {
    const self = this;
    return function(...callArgs) {
        const args = bindArgs.concat(callArgs)
        return self.apply(context, args)
    }
}

function greet(arg1, arg2) {
    console.log(`hello ${this.name}`, arg1, arg2)
}

const obj = {
    name: 'zhangsan'
}

greet.myCall(obj, 1, 2);
greet.myApply(obj, [1, 2])
greet.myBind(obj)(1,2)