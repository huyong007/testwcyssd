
function buyFoods(callback) {
    console.log('我要采购食物了');
    setTimeout(function () {
        console.log('采购完毕');
        var foodsList = ['fish', 'egg', 'meat'];
        callback(foodsList);
    }, 5000);
}
function prepare() {
    console.log('努力磨刀，努力洗碗，，，努力打扫，，，劳动光荣');
    return (Math.random() > 0.5);
}
function cooking(foodsList, callback) {
    console.log('开始做菜啦。。。。');

    setTimeout(function () {
        console.log('今天要做这洗菜' + foodsList);
        console.log('搞定，上菜');
        var feast = ['鸡蛋西红柿', '红烧肉', '红烧鱼'];
        callback(feast);
    }, 5000);
}
function startWork() {
    var success = prepare();
    if (!success) {
        console.log('事情安排好了，先休息会');
        return;
    }
    buyFoods(function (foodsList) {
        cooking(foodsList, function (feast) {
            console.log('...酒席准备好了...');
            for (var i = 0; i < feast.length; i++) {
                console.log(feast[i]);
            }
        });
    });
    console.log('终于搞好了，我走了');
}
startWork();