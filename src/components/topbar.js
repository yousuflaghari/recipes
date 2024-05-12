import React from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const TopContainer = styled.div`
  color: ${(props) => props.theme.colors.topcontainerColor};
  display: flex;
  width: auto;
  background-color: ${(props) =>
    props.theme.colors.topcontainerBackgroundColor};
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
