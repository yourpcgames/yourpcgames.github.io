
<!-- import the webpage's javascript file -->
	 
<script type='text/javascript' src='//pl26123463.effectiveratecpm.com/d8/71/e9/d871e9d5735ede95cca7a01a9b5ec8ba.js'></script>


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
