// 扩展运算符... 遍历所有可迭代属性。。拷贝对象，在对象中使用， 返回对象；； 在数组也可用 意义不大 ，等同于展开再合起来。。
let person = {name: 'tom', age: 18}
let some = {...person}
console.log(some)
let arrObj = {...[1, 2, 3]}
console.log(arrObj)
let strObj = {..."abc"}
console.log(strObj)
// 合并两对象
let strObj2 = {..."abc", ...person}
console.log(strObj2)



// 高阶函数即 按照约定提供一个满足功能和要求的函数（注意重点是入参和返回值）