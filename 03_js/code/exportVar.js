/*
*  export 3种形式
*  1. export var m = 'module a'
*  2. var m = 'xxx'
*     export { m }
*  3. export { m2 as m }
*
* */
// 一般到出
export let m1 = 'm1...'

let m2 = 'm2...'
export {m2}

// 指定接口名导出
let m = 'm3...'
export {m as m3}

// 默认导出
export default () => {
    console.log('....')
}