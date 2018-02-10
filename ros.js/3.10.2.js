

var truevar = 1;
fakevar = 2;
this.fakevar2 = 3;
console.log(delete truevar);
console.log(delete fakevar);
console.log(delete this.fakevar2);