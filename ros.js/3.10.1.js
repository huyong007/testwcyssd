

function test(o) {
    var i = 0;
    if (typeof o == 'object') {
        var j = 0;
        for (var k = 0; k < 10; k++) {
            console.log(k);
        }
        console.log(k);
    }
    console.log(j);
}
console.log(test());


console.log('\n');
var scope = "global";
function f() {
    console.log(scope);
    var scope = "local";
    console.log(scope);
}
 f();
 console.log("\n");
 function f (){
     var scope;
     console.log(scope);
     scope = "local";
     console.log(scope)
 }
 f();