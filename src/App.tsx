import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Container className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: lightgreen;
`;

export default App;
