const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const volumeProgres = document.getElementById("progress-volume");
const volume = document.getElementById("volume");
const times = document.getElementById("time-time");
const fullScreen =document.getElementById("full-screen");
const playback = document.getElementById("play-fast-slow");

function toggleVideoStatus() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
}
function iconPausePlay(){
    if(video.paused){
        play.innerHTML = `<i class="fas fa-play"></i>`;
    }
    else {
        play.innerHTML = `<i class="fas fa-pause"></i>`;
    }
}
function upVolume(){
    const volumeN = parseFloat(volumeProgres.value);
    video.volume = volumeN;
    if(video.volume == 0){
        volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
        video.muted = true;
    }
    else {
        volume.innerHTML = '<i class="fas fa-volume-up"></i>';
        video.muted = false;
    }
}
function mutedVideo (){
    video.muted = !video.muted;
    const volumeN = parseFloat(volumeProgres.value);

    if(video.muted){
        volumeProgres.value = 0;
        video.volume = 0;
        volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    else {
        volumeProgres.value = 1;
        video.volume = 1;
        volume.innerHTML = `<i class="fas fa-volume-up"></i>`;
    }
}
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
  
    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
      mins = "0" + String(mins);
    }
  
    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
      secs = "0" + String(secs);
    }
  
    times.innerHTML = `${mins}:${secs}`;
  }
  function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
  }
function stopV (){
    video.currentTime = 0;
    video.pause();
}
function fullS (){
    const box = document.querySelector(".box");

    if (!document.fullscreenElement){
        box.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
}
function updatePlayback() {
    const selectedValue = playback.options[playback.selectedIndex].value;
    video.playbackRate = selectedValue;
  }

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", iconPausePlay);
video.addEventListener("play", iconPausePlay);
play.addEventListener("click", iconPausePlay);
play.addEventListener("click", toggleVideoStatus);
volumeProgres.addEventListener("input", upVolume);
volume.addEventListener("click", mutedVideo);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("change", setVideoProgress);
stop.addEventListener("click", stopV);
fullScreen.addEventListener("click", fullS);
playback.addEventListener("change", updatePlayback);




