var soldierA = {
    soundOff: function () {
        console.log('1到');
    }
};
var soldierB = {
    soundOff: function () {
        console.log('2到');
    }
};
var soldierC = {
    soundOff: function () {
        console.log('3到');
    }
};
var soldierD = {
    soundOff: function () {
        console.log('4到');
    }
};
function startSoundOff() {
    soldierA.soundOff();
    soldierB.soundOff();
    soldierC.soundOff();
    soldierD.soundOff();
};
startSoundOff();