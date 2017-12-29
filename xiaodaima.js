

var myLikeFoods = ['刀削面','拉面','杂酱面','麻辣面','牛肉面',
'烩面','莜面'];

for(var i = 0,j = myLikeFoods.length-1;
              i < myLikeFoods.length/2 -1;
    i++,j--){
    console.log(myLikeFoods[i])
    console.log(myLikeFoods[j])

};

console.log('\n\n\n');
console.log('-------------------------');
for(var i = 0,j = 1;
    i < myLikeFoods.length/2-1 ;
i++,j++){
console.log('种类' +j),
console.log(myLikeFoods[i])

};