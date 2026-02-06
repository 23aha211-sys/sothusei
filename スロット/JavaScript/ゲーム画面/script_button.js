const reelButtonElements = document.querySelectorAll('.reel_button');

const scoreEl = document.getElementById('score');
const getScore = () => {
    const txt = scoreEl ? scoreEl.textContent : '0';
    const n = Number(txt);
    return Number.isFinite(n) ? n : 0;
}

reelButtonElements.forEach(element => {
    
    element.addEventListener('click',function(){
        if(getScore() < 3) return;
        this.classList.add('clicked');
    });
    
});



document.addEventListener('keydown',e =>{
    
    if(e.key&&e.key.toLowerCase()==='a'){
        if(getScore() < 3) return;
        console.log("左");
        if (reelButtonElements[0]) reelButtonElements[0].classList.add('clicked');
    }
    else if(e.key&&e.key.toLowerCase()==='s'){
        if(getScore() < 3) return;
        console.log("中");
        if (reelButtonElements[1]) reelButtonElements[1].classList.add('clicked');
    }
    else if(e.key&&e.key.toLowerCase()==='d'){
        if(getScore() < 3) return;
        console.log("右");
        if (reelButtonElements[2]) reelButtonElements[2].classList.add('clicked');
    }
    else if(e.key&&e.key.toLowerCase()==='w'){
        
        const startBtn = document.getElementById('startButton');
        if (startBtn && reelButtonElements[0].classList.contains('clicked') &&reelButtonElements[1].classList.contains('clicked') &&
    reelButtonElements[2].classList.contains('clicked')){ 
            reelButtonElements[0].classList.remove('clicked');
            reelButtonElements[1].classList.remove('clicked');
            reelButtonElements[2].classList.remove('clicked');
            console.log("start");
            changeNumber(-3);
        }
        else{
            console.log("まだだめ")
        }
    }
});

/* スタートボタンの領域*/
const startBtn = document.getElementById('startButton');
if(startBtn){
    startBtn.addEventListener('click',function(){
        
        reelButtonElements.forEach(element =>{
            if(reelButtonElements[0].classList.contains('clicked') &&reelButtonElements[1].classList.contains('clicked') &&
                reelButtonElements[2].classList.contains('clicked')){
                    
                reelButtonElements[0].classList.remove('clicked');
                reelButtonElements[1].classList.remove('clicked');
                reelButtonElements[2].classList.remove('clicked');
                changeNumber(-3);
                farstTime = false;
            }
            
        });
    });
};







