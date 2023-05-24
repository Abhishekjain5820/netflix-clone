// Replace YOUR_API_KEY with your own API key from TMDb
const API_KEY = "7543524441a260664a97044b8e2dc621";

// Fetch TV show data from TMDb API
async function fetchTvShows() {
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  const tvShows = data.results;
  return tvShows;
}

// Display TV shows in HTML
async function displayTvShows() {
  const tvShows = await fetchTvShows();
  const tvShowsContainer = document.getElementById("tv-shows");

  // Clear any existing content in the container
  tvShowsContainer.innerHTML = "";

  // Loop through the array of TV shows and create HTML elements for each one
  
  tvShows.forEach((show) => {
    const tvShowElement = document.createElement("div");
   /* tvShowElement.innerHTML = `
      <h3>${show.name}</h3>
      <img src="https://image.tmdb.org/t/p/w185/${show.poster_path}" alt="${show.name}">
      <p>${show.overview}</p>
    `;
    */
    tvShowElement.innerHTML=`
    <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w185/${show.poster_path}" alt="${show.name}">
  <div class="movie-details">
  <h3>${show.name}</h3>
  <p>${show.overview}</p>
   
  </div>
</div>
    
    `
    tvShowsContainer.appendChild(tvShowElement);
  });
  
  
}

// Call the displayTvShows() function when the button is clicked
document.getElementById("show-tv-shows-btn").addEventListener("click", displayTvShows);
