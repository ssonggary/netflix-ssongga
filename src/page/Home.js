import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRateMovies, upComingMovies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      {/* 조건부 렌더링 = useEffect가 로드하고 렌더링 하도록 해줘야함 */}
    </div>
  );
};

export default Home;
