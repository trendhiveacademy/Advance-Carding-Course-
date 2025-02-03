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
            "modestbranding": 1,   // Removes YouTube logo
            "rel": 0,              // Disables recommended videos at the end
            "showinfo": 0,         // Hides video info (deprecated, but still useful)
            "controls": 1,         // Shows play/pause and volume controls
            "disablekb": 1,        // Disables keyboard shortcuts
            "iv_load_policy": 3,   // Hides annotations
            "fs": 0,               // Disables fullscreen button
            "cc_load_policy": 0,   // Hides captions
            "modestbranding": 1    // Hides the "YouTube" logo
        }
    });
}
