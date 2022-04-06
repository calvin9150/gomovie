import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const onClickMenu = (page: string) => {
    navigate(page);
  };

  return (
    <Container>
      <Logo onClick={() => onClickMenu("")}>영화를보자</Logo>
      <Menu>
        <div onClick={() => onClickMenu("")}>HOME</div>
        <div onClick={() => onClickMenu("about")}>ABOUT</div>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100vw;
  padding: 0 2em;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-size: 3em;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;

  div {
    margin: 0 1em;
    cursor: pointer;
  }
`;

export default Header;
