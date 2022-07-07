// 转json ：stringify()
// 转对象： parse()



let stu = {
    name: 'tom',
    score: 100
}

let s = JSON.stringify(stu)
console.log(typeof s)
console.log(s)

// 反序列化
console.log(JSON.parse(s))
console.log(typeof JSON.parse(s))           // object