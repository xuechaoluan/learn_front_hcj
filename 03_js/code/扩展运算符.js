// 扩展运算符... 拷贝对象，在对象中使用
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