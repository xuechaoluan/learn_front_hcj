// 数组解构赋值
let [a, b] = [1, 2]
console.log(a, b)
// 嵌套
let [x, [y], z] = [10, [10, 20], 30]
console.log(x, y, z)
// 扩展运算符(只能在末尾)
let [m, ...n] = [100, 200, 300, 400]
console.log(m, n)
// interator类型都可以
let map = new Map([['1', 'a'], ['2', 'b']])
let [k1, k2] = map
console.log(k1, k2)
// 设置默认值
let names = ['jack', 'tom']
let [n1, n2, n3 = 'tony'] = names
console.log(n1, n2, n3)


// 对象解构赋值
let {name} = {name: "猪痞恶霸"}
console.log(name) // 猪痞恶霸
// 变量名和属性名不一致
let {name: rname} = {name: "猪痞恶霸"}
console.log(rname) // 猪痞恶霸
// 多层嵌套
let people = {
    uname: "猪痞恶霸",
    like: {
        community: "juejin",
        code: "js"
    }
}
// let {uname, like:{code}} = people    // 只有code值变量名，like是模式匹配
// console.log(uname, code)
// 给code设置变量别名
let {uname, like: {code: ccc}} = people
console.log(ccc)


// 解构赋值的使用场景 https://es6.ruanyifeng.com/#docs/destructuring#%E7%94%A8%E9%80%94
for (let [k, v] of map) {
    console.log(k + ' = ' + v)
}

// 避免被解构的对象是null或者undifind（如果是null的情况下，及时添加默认值也会报错）
let data = null
let {d} = data || []
let {d2} = data ? data : []
console.log(d, d2)