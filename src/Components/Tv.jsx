import React, { useEffect, useState } from 'react'
import { getTrending } from '../Api/Api';
import Item from './Item';

export default function Tv() {
  const [tv, setTv] = useState([]);

  let getData = async () => {
    let movies = await getTrending("tv");
    setTv(movies);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {tv.length !== 0 ? (
            tv.map((movie) => {
              return <Item key={movie.id} data={movie} />;
            })
          ) : (
            <h1 className="text-center">Loading...</h1>
          )}
        </div>
      </div>
    </>
  )
}
