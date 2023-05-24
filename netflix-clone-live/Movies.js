// Replace YOUR_API_KEY with your own API key from TMDb
const API_KEY = "7543524441a260664a97044b8e2dc621";

// Fetch movie data from TMDb API
async function fetchMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  const movies = data.results;
  return movies;
}

// Display movies in HTML
async function displayMovies() {
  const movies = await fetchMovies();
  const moviesContainer = document.getElementById("movies");

  // Clear any existing content in the container
  moviesContainer.innerHTML = "";

  // Loop through the array of movies and create HTML elements for each one
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.className = "card";
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.title}">
      <div class="card-content">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-description">${movie.overview}</p>
        <button class="watch-now-button">Watch Now</button>
      </div>
    `;
    moviesContainer.appendChild(movieElement);
  });
}

// Call the displayMovies() function when the button is clicked
document.getElementById("show-movies-btn").addEventListener("click", displayMovies);
