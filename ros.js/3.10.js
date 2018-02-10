
var scope = "global";
function checkscope() {
    var scope = 'local';
    return scope;
}
console.log(checkscope())
console.log('\n');
scope = "global";
function checkscope2() {
    scope = "local";
    myscope = "body"
    return [scope, myscope];
};
console.log(checkscope2());
console.log('\n');
var scope = 'global scope ';
function checkscope() {
    var scope = "local scope ";
    function nested() {
        var scope = "nested scope";
        return scope;
    }
    return nested();
}
console.log(checkscope());
console.log('\n');