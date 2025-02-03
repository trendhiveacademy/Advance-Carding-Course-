// Prevent Right Click & Inspect Element
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "s" || e.key === "u" || e.key === "p" || e.key === "F12")) {
        e.preventDefault();
    }
});

// Get the current website domain dynamically
const allowedDomain = window.location.hostname;

// Restrict Video Playback to Only This Website
function onYouTubeIframeAPIReady() {
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

// Load YouTube IFrame API
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
