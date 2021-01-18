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

// let data = require('./xxx')
// console.log(data) // {name: 'why', age: 18}


// 说两句
// module.exports === exports 
// 两者为全局对象共同指向一个内存地址，默认情况下为同一个地址

// let info = require('路径') 
// require的就是exports这个全局属性