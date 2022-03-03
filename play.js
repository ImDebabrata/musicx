var mysong = document.getElementById("musicx");
var icon = document.getElementById("icon")
icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "media/pause.png"
    }else {
        mysong.pause();
        icon.src = "media/play.png"
    }
}