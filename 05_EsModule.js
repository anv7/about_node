// 顺便看了下 《ES6标准入门》 复习下ES6风格写法
// 应该注意的是 解构赋值 这个功能

const arr = [111, 222, 444]
const [,,third] = arr

// console.log(first)
// console.log(second)
// console.log(third)


let obj = {
    k: 11,
    k2: 22,
    k3: 33
}

function testing({k, k2, k3}) {
    console.log(k)
    console.log(k2)
    console.log(k3)
}
// testing(obj)





// 函数返回多个值
// 如果函数返回多个值，优先使用对象的解构赋值，这样以便于以后新增加返回值 及更改返回值顺序
const inputs = {
    left: 1,
    right: 2,
    top: 3,
    bottom: 4
}

function processInput(params) {
    let { left, right, top, bottom } = params
    return { left, right, top, bottom }
}

const {bottom: baz} = processInput(inputs)

// console.log(processInput(inputs))
// console.log(baz)


// 什么是函数的柯里化
// http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html


