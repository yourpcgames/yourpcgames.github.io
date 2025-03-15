function searchGame() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let games = document.querySelectorAll('.game-item');
    let found = false;

    games.forEach(game => {
        let title = game.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            game.style.display = "block";
            found = true;
        } else {
            game.style.display = "none";
        }
    });

    document.getElementById('noResults').style.display = found ? "none" : "block";
}
