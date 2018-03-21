//study5的kitchen_workflow_async.js使用時間：11：27:81
/*今天复习了类型转换的知识，通过prepare的return给的值如果是
空字符串或者是undefined或者null或者是0，-0还NaN都是false其余的
都可以转换成boolean的true，其次通过全局变量和局部变量从新理解了一遍
cooking函数的执行流程，3，函数的执行都是按照顺序一行一行去执行，
如果函数体内比如碰到条件语句会出现跳过执行的情况，其他都是一条来
执行，跳转语句看了标签语句和break还有continue这两个都牵扯到while
和其他的条件语句，这个后面再看,如果打印的数字超过数组的范围那么
会给一个underfined，continue就是在出现了错误值仍然继续执行在for
循环中，*/
function buyFoods(callback) {
    console.log("我要開始採購食物啦、、、、、");
    setTimeout(function () {
        console.log('採購完畢');
        var foodsList = ['fish', 'egg', 'meat'];
        callback(foodsList);
    }, 5000);
}
function prepare() {
    console.log('努力磨刀...努力洗碗...努力打掃...勞動最光榮');
    return ;
}
function cooking(foodsList, callback) {
    console.log('開始做菜啦。。。。');
    setTimeout(function () {
        console.log('今天要做這些菜' + foodsList);
        console.log('大功告成，上菜');
        var feast = ['雞蛋西紅柿', '紅燒肉', '紅燒魚'];
        callback(feast);
    }, 5000);
}
function startWork() {
    var success = prepare();
    if (!success) {
        console.log('還沒準備好');
        return;

    }
    buyFoods(function (foodsList) {
        cooking(foodsList, function (feast) {
            console.log('-----酒席準備好了-----');
            for (var i = 0; i < feast.length; i++) {
                console.log(feast[i]);
            }
        });
    });
    console.log('事情安排好了，我去洗澡了');
}

startWork();
console.log('------------------------------');

var a=[12,3,3,4,-0,5]

for(var i=0;i<a.length;i++){
    if(!a[i]) continue;
    console.log(a[i]);
}
