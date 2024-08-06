
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let intervalId;
let currentColor;

const changeBgColor = function () {
    currentColor = randomColor();
    document.body.style.backgroundColor = currentColor;

}

const startChanging = function () {
    intervalId = setInterval(changeBgColor, 1500);
    console.log('Color Changing');

};
const color = document.querySelector('.color');
const stopChanging = function () {
    clearInterval(intervalId);
    console.log("changing stopped");
    intervalId = null;
    color.innerHTML = `<h3>The color you choose is: ${currentColor} </h3>`

}

document.getElementById('start').addEventListener('click', startChanging);
document.getElementById('stop').addEventListener('click', stopChanging);






