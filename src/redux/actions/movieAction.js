import api from "../api";

//apikey
//ec44fdce1daa2b02ea6251fb2c3b7d79

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

    // let url = `/movie/popular?language=en-US&page=1`
    // let resposne = await fetch(url)
    // let data = await resposne.json()

    // let url2 = `/movie/top_rated?language=en-US&page=1`

    // let url3 = `/movie/upcoming?language=en-US&page=1`
  };
}

export const movieAction = {
  getMovies,
};
