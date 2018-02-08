
s1 = '2 + 2';
s2 = new String('2 + 2');
console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s2.valueOf()));
String.prototype.length(s1);