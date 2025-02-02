// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable Keyboard Shortcuts
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "s" || e.key === "u" || e.key === "p")) {
        e.preventDefault();
    }
    if (e.key === "F12") {
        e.preventDefault();
    }
});

// Black Screen on Screen Recording (Not foolproof)
let secureVideo = document.getElementById("secure-video");

function detectRecording() {
    let videoElement = secureVideo;
    let stream = videoElement.captureStream();
    if (stream.active) {
        alert("Screen recording detected! Playback is paused.");
        videoElement.pause();
    }
}

secureVideo.addEventListener("play", detectRecording);