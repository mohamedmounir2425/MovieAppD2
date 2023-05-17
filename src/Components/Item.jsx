import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { poster_path, title, overview, vote_average,name,id,media_type } = props.data;

  return (
    <>
      <div className="col-2">
        <div className=" ">
          <div className="item position-relative overflow-hidden">
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
            />

          <Link to={`/details/${id}/${media_type}`}>
          
          <div className="overLay position-absolute d-flex text-center align-items-center">
              <p>{overview.split(" ").slice(0, 10).join(" ")}</p>
            </div>
          </Link>
            <div className="vote p-2">
              {vote_average.toFixed(1)}
            </div>
          </div>
          <h6 className="my-3">{title} {name}</h6>
        </div>
      </div>
    </>
  );
}
