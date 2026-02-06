const imgURL = [
    "../画像/仮画像赤丸.png",
    "../画像/仮画像青四角.png",
    "../画像/仮画像黄三角.png"
];

const imgUp = document.querySelector('.imgUp');
const imgMid = document.querySelector('.imgMid');
const imgDown = document.querySelector('.imgDown');

let upCrrent = 2;
let midCrrent = 1;
let downCrrent = 0;

function upChange(){
    upCrrent = (upCrrent + 1) % 3;
    imgUp.src = imgURL[upCrrent];
}

setInterval(upChange,100);

function midChange(){
    midCrrent = (midCrrent + 1) % 3;
    imgMid.src = imgURL[midCrrent];
}

setInterval(midChange,100);

function downChange(){
    downCrrent = (downCrrent + 1) % 3;
    imgDown.src = imgURL[downCrrent];
}

setInterval(downChange,100);