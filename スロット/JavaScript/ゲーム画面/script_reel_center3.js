const imageFilesc3 = ['../画像/仮画像黄三角.png',
                    '../画像/仮画像青四角.png',
                    '../画像/仮画像赤丸.png',
                    '../画像/星.png'
                    ];

const reelCenter3 = document.getElementById('reel_picture_center3');
let currentIndexC3 = 0;
let intervalIdC3 = null;
function reelCenter3_move(){
    currentIndexC3 = (currentIndexC3 + 1) % imageFilesc3.length;

    reelCenter3.src = imageFilesc3[currentIndexC3];
}




function startReelCenter3(){
    if(!intervalIdC3){
        intervalIdC3= setInterval(() =>reelCenter3_move(),100);
    }
}

function stopReelCenter3(){
    if(intervalIdC3){
        clearInterval(intervalIdC3);
        intervalIdC3 = null;
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click',()=>{
        if(getScore()>=3 && !reelButtonElements[1].classList.contains('clicked')){
            startReelCenter3();
        }
        else{
            console.log('だめ');
        }
    });

    const stopBtn = document.getElementById('center_reel_button');
    stopBtn?.addEventListener('click',()=>stopReelCenter3());
})






