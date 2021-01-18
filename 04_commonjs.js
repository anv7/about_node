const obj = {
  name: "why",
  age: 18,
};
const str = "123";

obj.name = "kobe";
// str = "321";

console.log(obj);
console.log(str)



// commonjs 如下

// exports.name = 'why'
// exports.age = 18

// 1、被加载的文件在加载的时候会被执行一次
// require的加载过程是 同步 的，所以的如果加载时间过长，会导致进程阻塞，体验不是甚好
// 2、多次加载同一个模块，被加载的模块只会执行一次，因为其内部会缓存是否加载过的状态
// 3、如果存在循环引用，为‘图解构的深度优先遍历’（还有一种是广度优先）

// let data = require('./xxx')
// console.log(data) // 结果 ：{name: 'why', age: 18}


// 说两句
// module.exports === exports 
// 两者为全局对象共同指向一个内存地址，默认情况下为同一个地址

// let info = require('路径') 
// require的就是exports这个全局属性