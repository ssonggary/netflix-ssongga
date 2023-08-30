let initialState = {
  popularMovies: {},
  topRateMovies: {},
  upComingMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return { ...state, popularMovies: payload.popularMovies, topRateMovies: payload.topRateMovies, upComingMovies: payload.upComingMovies };

    default:
      return { ...state };
  }
}

export default movieReducer;
