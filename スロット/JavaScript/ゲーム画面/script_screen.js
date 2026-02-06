let currentScreenIndex = 1;
const totalFrames = 53;
function screenChange(){
    const screenElement=document.getElementById("screenImg");
    if(!screenElement) return;
    
    
    
        screenElement.src =`../画像/棒人間/棒人間_${currentScreenIndex}.png`;
        currentScreenIndex = (currentScreenIndex % totalFrames) + 1 
    
}



setInterval(()=>screenChange(),10);
