let p = new Promise((resolve, reject) => {
    console.log("p1 start...")
    resolve("hello ...")
});


let p2 = new Promise((resolve, reject) => {
    console.log("p2 start...")
    reject("no no...")
});


function simple() {
    return "simple..."
}

/*
    async 表示函数异步 ，可以被await，函数返回值类型是一个promise
    await 可以是任意表达式，不止promise，若是promise，返回值是resolve值
    try catch 可以捕获promise中reject的值
    https://juejin.cn/post/6995357238277701668#heading-32
 */

async function test() {
    let t1 = await p.then(d => "ddddddd");
    console.log(t1)

    try {
        await p2;
    } catch (e) {
        console.log(e)
    }

    let s = await simple();
    console.log(s)

    return "async value..."
}





