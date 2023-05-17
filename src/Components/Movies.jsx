import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { getTrending } from "../Api/Api";
export default function Movies() {
  const [movies, setMovies] = useState([]);

  let getData = async () => {
    let movies = await getTrending("movie");
    setMovies(movies);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {movies.length !== 0 ? (
            movies.map((movie) => {
              return <Item key={movie.id} data={movie} />;
            })
          ) : (
            <h1 className="text-center">Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}
