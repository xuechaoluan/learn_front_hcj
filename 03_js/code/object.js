// 直接定义

let tom = {
    name: 'tom',
    age: 18,
    getAge() {
        return this.age
    },
    getName() {
        // this指向问题， 没有调用者的时候是顶层window或者其他 （看什么环境）调用的
        // 箭头函数修复了这个问题，永远指向外层调用者 即对象本身
        // return function () {
        //     return `${this.name}.wang`
        // }()
        return (() => `${this.name}.wang`)()
    }
}

console.log(tom.getAge())
console.log(tom.getName())



class Student {
    constructor(name) {
        this.name = name
    }

    getName() {
        return (() => `${this.name}.wang`)()
    }
}

let tom2 = new Student('tom')
console.log(tom2.getName())

console.log(tom2.constructor)
