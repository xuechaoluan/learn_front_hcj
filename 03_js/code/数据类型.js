// 类型判断
if (100 instanceof Number) {
    console.log(true)
}


// Number
let n = 100
console.log(Number.isInteger(n))
let number = Number.parseInt('100.6')
console.log(number)

// Number Boolean String 转换
console.log(String(100))
console.log(String(false))
console.log(Boolean(100))
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Number('-100'))
console.log(Number('123n'))         // NaN (表达式无法计算的情况都会返回NaN, 使用isNaN方法来判断)
console.log(Number(false))

// Boolean
console.log('100' == 100)
console.log('100' === 100)

// String
// 格式化 ``
let name = 'TOM'
console.log(`Hello , ${name}`)
// 查询： indexOf, subString, slice, search, split(转数组)
// 替换： replace, replaceAll
// 判断：includes, startsWith, endsWith
let s = "abc...".slice(3)           // 代替substring，可以使用负数索引下标
let s1 = "abc...".substring(3);
console.log(s)
console.log(s1)
let number1 = name.search("M");
console.log(number1)
let strings = name.split('');
console.log(strings)


// Array
Array.from()


// Object