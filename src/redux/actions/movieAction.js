import api from "../api";

//apikey
//ec44fdce1daa2b02ea6251fb2c3b7d79

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const topRateApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

      let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([popularMovieApi, topRateApi, upComingApi]);
      //promise.all는 각각의 api를 동시에 호출할 동안 한번만 기다리게 해준다.

      console.log(popularMovies);
      console.log(topRatedMovies);
      console.log(upComingMovies);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: { popularMovies: popularMovies.data, topRatedMovies: topRatedMovies.data, upComingMovies: upComingMovies.data },
      });
    } catch (error) {
      //에러 핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
};
