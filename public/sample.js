function buyFoods(callback){
    console.log('我要开始采购食物啦。。。。');
setTimeout(function(){
    console.log('采购完毕');
    var foodeList=['fish','egg','meat'];
    callback(foodeList);

},5000);

}
function prepare(){
    console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');
    return  ture;
}
function cooking(foodeList,callback){
    console.log('开始做菜啦。。。。');
    setTimeout(function(){
        console.log('今天要做这些菜'+foodeList);
        console.log('大功告成，上菜');
        var feast=['鸡蛋西红柿','红烧肉','红烧鱼'];
        callback(feast);
    },5000);
}

function startWork(){
    var success=prepare();
if(!success){
    console.log('还没准备好');
    return;
}
buysFoods(function(foodeList){
    cooking(foodeList,function(feast){
        console.log('-----酒席准备好了------');
        for(var i=0;i<feast.length;i++){
            console.log(feast[i]);
        }
    });
});
console.log('事情安排好了，我先去洗个澡了');


}
startWork();