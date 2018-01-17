var name = 'xiaoming';
var height = 170, weight = 130.1;
var age = 18;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';
var isMan = true;
var student = false;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';
var locationBase = '北京';
var company = locationBase + '新生大学';
var myLikeColorsList = ['blue', 'green', 'black', 'white'];
var myLikeFoods = ['刀削面', '拉面', '牛肉面', '杂酱面', '麻辣面', '烩面', '莜面'];
var myJavaScriptLessionInfoObj = {
    teacher: name,
    teacherWeChat: wechat_user_name,
    title: 'javaScript编程入门',
    beginTime: '2018/8/8',
    endTime: '2018/9/4',
    boysStudent: 417,
    girlsStudent: 119,
    lessionTarget: '帮助更多小白学习JavaScript',
    githubUrl: 'http://github.com/xugy0926/getting-started-with-javascript'
};

console.log('姓名');
console.log(name);
console.log("年龄；" + age);
console.log('身高= ' + height + ', 体重 = ' + weight);
console.log('地点：' + locationBase);
console.log('公司：' + company);
console.log('\n\n\n');
console.log('---我喜欢的颜色---');
console.log('我总共喜欢' + myLikeColorsList.length + ' 种颜色 ');
console.log(myLikeColorsList[0]);
console.log(myLikeColorsList[2]);
console.log(myLikeColorsList[1]);
console.log(myLikeColorsList[3]);
console.log('*************************');
console.log('\n\n');
console.log('***我喜欢的事物***');
console.log('我总共喜欢' + myLikeFoods.length + '种事物');
for (var i = 0; i < myLikeFoods.length; i++) { console.log(myLikeFoods[i]) };
console.log('********');
for (var i = 0, j = myLikeFoods.length; i < myLikeFoods.length;
    i++ , j--) {
    console.log(myLikeFoods[i, j])
};
console.log('------------');
console.log('\n');
console.log('JavaScript课程信息');
console.log(myJavaScriptLessionInfoObj);
console.log('\n');
console.log('#########');
console.log('我是分界线');
console.log('##########');
var xiaoming2 = {
    name: name,
    config: {
        age,
        height,
        weight,
        isMan,
        student,
        bloodType: 'A',
        haveGirlFriend: true
    },
    like: {
        myLikeColorsList,
        myLikeFoods
    },
    work: {
        locationBase,
        company
    },
    myJavaScriptLessionInfoObj
};
console.log(xiaoming2);
