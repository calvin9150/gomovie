import React from "react";
import styled from "styled-components";

import { getWeeklyMovies } from "../actions/movie";
import useAsync from "../hooks/useAsync";

function Home() {
  const weeklyMovies = useAsync(getWeeklyMovies);
  // const info = useAsync(getMovieInfo);

  console.log(`weeklyMovies`);
  console.log(weeklyMovies);
  // console.log(`info.data`);
  // console.log(info.data);

  return (
    <>
      <Container>
        {weeklyMovies.data?.items.map((v, i) => (
          <Item key={i}>
            <img src={v.image} alt="movieImg" />
          </Item>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  height: 90%;
  min-height: 600px;
  padding: 5rem;
  background-color: lightblue;

  div:nth-child(5n) {
    margin-right: 0;
  }
`;

const Item = styled.div`
  height: 18rem;
  width: 13rem;
  border: 1px solid gray;
  margin-right: 3.6rem;
  margin-bottom: 3rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Home;
