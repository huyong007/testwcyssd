

function checkFlightSchedule(callback2) {
    console.log('开始查询航班');
    var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
    };
    callback2(scheduleInfo.start);

};

function callback3(startTime) {
    console.log(startTime);
};
checkFlightSchedule(callback3);