var audio = document.getElementById("audio");
audio.currentTime = 10;
function handleVisibilityChange() {
    if (document.hidden) {
      audio.pause();
    } else {
      audio.play();
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
