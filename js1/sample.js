
var jsonFile=require('jsonFile');
var file='./test_data/data.json';
var testJSONData=[{
    name:'xugaoyang',
    avatar:'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
words:'我想带领大家感受变成语言JavaScript的魅力，与同学们一起成长是我的荣幸'
},{
    avatar:"https://avatars0.githubusercontent.com/u/384727?v=4&s=460",
    name:"蓉儿",
    words:"成为屌屌的全栈设计师"
}
];
jsonFile.writeFile(file,testJSONData,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('read ok')
    }
});