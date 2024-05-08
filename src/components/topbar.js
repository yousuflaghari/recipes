import React from "react";
import styled from "@emotion/styled";

const TopContainer = styled.div`
  color: white;
  display: flex;
  width: auto;
  background-color: #7c3030;
  align-items: center;
  justify-content: center;
  font-size: large;
  font-weight: bold;
`;

const Topbar = () => {
  return (
    <TopContainer>
      <p>OUR RECIPES, YOUR INBOX.</p>
    </TopContainer>
  );
};

export default Topbar;
