// Search Functionality
function searchGame() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let games = document.querySelectorAll(".game-item");
    let found = false;

    games.forEach(game => {
        let title = game.getAttribute("data-title");
        if (title.includes(input)) {
            game.style.display = "block";
            found = true;
        } else {
            game.style.display = "none";
        }
    });

    if (!found) {
        document.querySelector(".game-list").innerHTML = "<p style='text-align: center;'>❌ No items found</p>";
    }
}

// Filter by Category
function filterCategory(category) {
    let games = document.querySelectorAll(".game-item");

    games.forEach(game => {
        let title = game.getAttribute("data-title").toLowerCase();
        if (title.includes(category)) {
            game.style.display = "block";  // Show matching games
        } else {
            game.style.display = "none";  // Hide non-matching games
        }
    });
}
