// Prevent Right Click & Inspect Element
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "s" || e.key === "u" || e.key === "p" || e.key === "F12")) {
        e.preventDefault();
    }
});

// Function to Restrict Video Playback to Your Website
function onYouTubeIframeAPIReady() {
    let allowedDomain = window.location.hostname; // Auto-detects your GitHub Pages domain

    if (window.location.hostname !== allowedDomain) {
        alert("This video can only be watched on the official website.");
        return;
    }

    new YT.Player("player", {
        height: "360",
        width: "640",
        videoId: "i9fRQ7Nj5ZQ", // Your YouTube Video ID
        playerVars: {
            "modestbranding": 1, 
            "rel": 0, 
            "controls": 0
        }
    });
}
