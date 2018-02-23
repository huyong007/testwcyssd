
var geval = eval;
var x = "global", y = "global";
function f() {
    var x = "local";
    eval("x +='changed';");
    return x;
}

function g() {
    var y = "local";
    geval("y += 'changed';");
    return y;
}
console.log(f(), x);
console.log(g(), y);
console.log('\n')

    (function () {
        var a = b = 3;
    })();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));