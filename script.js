// Prevent Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Prevent Keyboard Shortcuts (Ctrl+S, Ctrl+U, F12, Print Screen)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "s" || e.key === "u" || e.key === "p")) {
        e.preventDefault();
    }
    if (e.key === "F12") {
        e.preventDefault();
    }
});

// Load Video Securely (Prevents Direct Download)
document.addEventListener("DOMContentLoaded", function () {
    let videoElement = document.getElementById("secure-video");
    let videoUrl = "your-video-url.mp4"; // Change this to your actual video link

    let source = document.createElement("source");
    source.src = videoUrl;
    source.type = "video/mp4";
    
    videoElement.appendChild(source);
});

// Black Screen on Screen Recording
function detectRecording() {
    let dummyCanvas = document.createElement("canvas");
    let ctx = dummyCanvas.getContext("2d");
    
    ctx.fillRect(0, 0, dummyCanvas.width, dummyCanvas.height);
    let pixels = ctx.getImageData(0, 0, 1, 1).data;
    
    if (pixels[0] === 0 && pixels[1] === 0 && pixels[2] === 0) {
        alert("Screen recording detected! Video playback stopped.");
        document.getElementById("secure-video").pause();
    }
}

setInterval(detectRecording, 3000); // Check for screen recording every 3 seconds
