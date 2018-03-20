
function keys(o){
    if(typeof o!=="object")throw TypeError();
    var result =[];
    for(var prop in o){
        if(o.hasOwnProperty(prop))
        result.push(prop);
    }
    return result;
}
var o={x:1,y:3,Z:9,adult:true}
key(o);