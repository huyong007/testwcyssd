
function checkFlightSchedule(){
    console.log('开始查询航班信息');
    setTimeout(function(){
        var scheduleInfo={
            start:'8/23 8:00',
            end:'8/23 10:30',
            from:'beijing',
            to:'hangzhou'
        };
        callback(scheduleInfo.start);
    },5000);
}
function callback(startTime){
    console.log('通过反馈通道获得信息');
    console.log(startTime);
}
checkFlightSchedule();