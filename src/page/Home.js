import React, { useEffect, CSSProperties } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  //loding이 true면 loding스피너를 보여주고
  //loding이 false면 데이터를 보여주고
  //true : 데이터 도착 전
  //false면 : 데이터 도착 후, 에러가 났을때
  if (loading) {
    return <ClipLoader color="#fff" loading={loading} cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader" />;
  }

  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      {/* 조건부 렌더링 = useEffect가 로드하고 렌더링 하도록 해줘야함 */}

      <h1>Polular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Up coming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
