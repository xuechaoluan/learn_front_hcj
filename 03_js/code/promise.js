let promise = new Promise((resolve, reject) => {
    resolve("123")
});

function f1(arg) {
    return new Promise((resolve, reject) => {
        console.log(`上一层的数据是：${arg}`)
        resolve(456)
    })
}

function f2(arg) {
    return new Promise((resolve, reject) => {
        console.log(`上一层的数据是：${arg}`)
        resolve(arg)
    })
}


let promise2 = promise.then(data => f1(data)).then(data=> f2(data)).then(data => console.log(data));

// 返回值是一个promise对象
// promise 缺点就是里面的值 拿不出来用 ， 只能到下一个promise中使用
let str = promise.then(data => "something...")
console.log(`str: ${str}`)

