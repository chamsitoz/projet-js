
const input = document.getElementById("search-input");          
const results = document.getElementById("search-results");      
const loadMoreBtn = document.getElementById("load-more-search"); 



let query = "";


let page = 1;

function displayMovies(movieList) {

    movieList.forEach(film => {

        // Si le film n’a pas d’image → on met une image par défaut
        const poster = film.Poster !== "N/A"
            ? film.Poster
            : "https://via.placeholder.com/150x220?text=No+Image";

        // On crée une carte pour un film
        const card = document.createElement("div");
        card.classList.add("movie-card");

        // Ce qu'il y a dans la carte
        card.innerHTML = `
            <img src="${poster}" alt="${film.Title}">
            <h3>${film.Title}</h3>
            <a href="movie.html?id=${film.imdbID}">Voir détails</a>
        `;

        // On ajoute la carte dans la page
        results.appendChild(card);
    });
}


async function searchMovies(reset = false) {

    
    if (query.length < 3) {
        results.innerHTML = "";
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;

   
    const response = await fetch(url);
    const data = await response.json();

    if (reset) {
        results.innerHTML = "";
    }

    if (!data.Search) {
        results.innerHTML = "<p>Aucun film trouvé.</p>";
        return;
    }

    displayMovies(data.Search);
}

input.addEventListener("input", () => {

    query = input.value.trim(); // On récupère ce qu'elle écrit
    page = 1;                   // Nouvelle recherche → retour page 1

    searchMovies(true);         // On efface les anciens films et on cherche
});





loadMoreBtn.addEventListener("click", () => {

    page++;                 
    searchMovies(false);    
});
