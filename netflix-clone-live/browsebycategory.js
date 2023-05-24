const apiKey = '7543524441a260664a97044b8e2dc621';

function getMovies() {
  const genre = document.getElementById('genre').value;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      const movieContainer = document.getElementById('movies');
      movieContainer.innerHTML = '';
      movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const movieTitle = movie.title;
        const movieOverview = movie.overview;
        const movieReleaseDate = new Date(movie.release_date).getFullYear();
        /*movieDiv.innerHTML = `
          <img src="${moviePoster}" alt="${movieTitle}">
          <h2>${movieTitle}</h2>
          <p>${movieOverview}</p>
          <p>${movieReleaseDate}</p>
        `;*/
        movieDiv.innerHTML=`
        <div class="movie-card">
  <img src="${moviePoster}" alt="${movieTitle}">
  <div class="movie-details">
    <h2 class="movie-title">${movieTitle}</h2>
    <p class="movie-release-year">${movieReleaseDate}</p>
    <p class="movie-description">${movieOverview}</p>
  </div>
</div>
        `

        movieContainer.appendChild(movieDiv);
      });
    })
    .catch(error => console.error(error));
}
