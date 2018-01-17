function soldierA() {
    console.log('1到');
    soldierB();
}
function soldierB() {
    console.log('2到');
    soldierC();
}
function soldierC() {
    console.log('e到');
    soldierD();
}
function soldierD() {
    console.log('4到');
    soldierE();
}
function soldierE() {
    console.log('9到');

}
function startSoundOff() {
    soldierA();
}

startSoundOff();