console.log('flow: 1');
// 定义求和函数sum
function sum(a, b, callback) {
  console.log('flow: 2');
  var c = a + b;
  callback(c);
  console.log('flow: 3');
  return 'xu';
}

console.log('flow: 4');
// 定义一个callback函数，用于接收sum函数返回的值
function resultCallback(value) {
  console.log('flow: 5');
  console.log(value);
  console.log('flow: 6');
}

console.log('flow: 7');
// 调用sum函数，并传递两个值给sum的参数，同时把resultCallback传过去
var result = sum(1, 2, resultCallback);
console.log('flow: 8');
// 打印result的值
console.log(result);
console.log('flow: 9');