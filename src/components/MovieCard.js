import React from "react";
import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);

  return (
    <div className="card" style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + ")" }}>
      <button
        onClick={() => {
          navigate(`/movies/:${item.id}`);
        }}
        className="overlay">
        <h1>{item.title}</h1>
        <div className="genre">
          {item.genre_ids.map((id) => (
            <Badge bg="danger" key={id}>
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </button>
    </div>
  );
};

export default MovieCard;
