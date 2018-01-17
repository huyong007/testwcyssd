function buyFoods() {
    console.log('采购原材料');
    var foodsList = ['fish','egg','meat'];
    return foodsList;
}

function prepare (){
    console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');
    return true;
}

function cooking(foodsList){
    console.log('今天要做这些菜'+ foodsList);
    console.log('大功告成，上菜');
var feast = ['鸡蛋西红柿','红烧肉','红烧鱼'];
return feast;
}

function startWork(){
    var success = prepare();
if (success){
    var foodsList = buyFoods();
    var feast = cooking (foodsList);
    console.log('---酒席准备好了---');
    console.log('\n');
    for (var i = 0,j = feast.length-1 ; i <feast.length/2;
        i++,j--){
            if(i!=j){
            console.log(feast[i]);
            console.log(feast[j]);}
        
        else{
            console.log(feast[i]);
        }
    }
}
else{
    console.log('还没准备好');
}
}
startWork();
