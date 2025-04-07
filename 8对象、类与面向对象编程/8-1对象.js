const obj = {};
Object.defineProperty(obj, 'name', {
    get() {
        return this._name;
    },
    set(value) {
        this._name = value;
    },
    enumerable: true, // 是否可枚举
    configurable: true,  // 是否可删除、可修改
})
obj.name = 'zhangsan';
console.log(obj.name)
