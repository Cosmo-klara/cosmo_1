function setRem() {
    console.log('非移动设备')
    baseSize = 2.7;
    let baseApp = baseSize / 375;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let dueH = windowWidth / 375
    if (windowHeight < dueH) {
        windowWidth = windowHeight / 667
    }
    let rem = windowWidth * baseApp;
    document.documentElement.style.fontSize = rem + "px";
}
window.addEventListener('DOMContentLoaded', setRem);
window.addEventListener('resize', setRem);