async function getSearchMovies(query, page = 1) {
  const key = 'e37afbe8681f4152ae6f2e33bec3a5b8';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getSearchMovies;
