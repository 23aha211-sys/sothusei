/*リールの役チェック*/
//縦一列のチェック
const a = new Array(3);

function setSrc(){
    a[0] = document.getElementById('reel_picture_left1').src;
    a[1] = document.getElementById('reel_picture_left2').src;
    a[2] = document.getElementById('reel_picture_left3').src;
    //console.log(a[0]);
    for(let i=0;i<3;i++){
        //console.log(a[i]);
    }
}
setInterval(setSrc,1000);