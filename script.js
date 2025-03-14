// Function to toggle game features
function toggleFeatures() {
    var features = document.getElementById("featuresContent");
    features.style.display = (features.style.display === "none" || features.style.display === "") ? "block" : "none";
}

// Function to show game details when button is clicked
function showGameDetails() {
    document.getElementById("gameSection").style.display = "block";
}
