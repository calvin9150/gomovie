import React from "react";
import { getWeeklyMovies } from "../actions/movie";
import useAsync from "../hooks/useAsync";

function Home() {
  const state = useAsync(getWeeklyMovies);

  console.log(state.data);

  return (
    <>
      <div>Home</div>
    </>
  );
}

export default Home;
