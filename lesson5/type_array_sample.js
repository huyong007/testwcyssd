
var myLikeColorsList = ['blue', 'green', 'black', 'write'];
console.log(myLikeColorsList);

for (var i = 0; i < myLikeColorsList.length; i++) {
    console.log(myLikeColorsList[i],myLikeColorsList[i].length);
}

myLikeColorsList.push('red');
console.log(myLikeColorsList);
myLikeColorsList.shift();
console.log(myLikeColorsList);
var index = myLikeColorsList.indexOf('black');
console.log(index);
//--------------------大马上的案例
var fruits = ['apple','banana'];
console.log(fruits.length);
var first = fruits[0];
console.log(first);
console.log(fruits[fruits.length-1]);
fruits.forEach(function (item,array){
    console.log(item);
});
console.log(fruits.push('girl'));
console.log(fruits);
//删除末尾的元素使用pop，删除开头的元素使用shift，
//添加元素到数组的末尾使用push，添加元素到数组的头部使用unshift
//遍历元素的使用forEach（function(item,index,array)
//{console.log(item,index);}）;更方便
//能够直接给出索引和元素，如果只需要元素用for循环也可以
//使用索引访问元素使用方括号[],数组元素的列出也是
//使用方括号,找到某个元素在数组中的索引使用indexOf，
//复制一个数组使用slice
console.log(fruits.slice());
console.log(fruits['2']!=fruits['02']);