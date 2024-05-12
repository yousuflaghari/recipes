import React, { useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../utils/constants/constants";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const ShopName = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  font-size: xxx-large;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding-left: 40px;
  font-family: cursive;
  color: ${(props) => props.theme.colors.nameColor};
  @media screen and (max-width: 780px) {
    padding: 0px;
  }
`;

const LinkTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;

  @media screen and (max-width: 780px) {
    flex-direction: row;
    margin-top: 5px;
    padding: 0px;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.linksColor};

  @media screen and (max-width: 780px) {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;

const SearchIcon = styled.div`
  cursor: pointer;
`;

const Quotation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Highlight = styled.span`
  font-family: cursive;
  color: ${(props) => props.theme.colors.highlightColor};
  font-size: x-large;
`;

const StyledH4 = styled.h4`
  color: ${(props) => props.theme.colors.highlightColor};
  @media screen and (max-width: 780px) {
    align_items: center;
  }
`;

const ToggleButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  margin-left: 30px;

  @media screen and (max-width: 780px) {
    margin-left: 5px;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.fontawesomeiconColor};
`;

const Header = ({ darkMode, toggleTheme }) => {
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    navigate(ROUTES.SEARCH);
  };

  return (
    <HeaderContainer>
      <NameTag>
        <ShopName>
          <Name>pinch of yum</Name>
        </ShopName>
        <LinkTag>
          <StyledLink to={ROUTES.DINNER}>DINNER</StyledLink>
          <StyledLink to={ROUTES.LUNCH}>LUNCH</StyledLink>
          <StyledLink to={ROUTES.DESSERTS}>DESSERT</StyledLink>
          <StyledLink to={ROUTES.SNAKS}>SNACK</StyledLink>
          <SearchIcon onClick={handleSearchIconClick}>
            <StyledFontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchIcon>
          <ToggleButton onClick={toggleTheme}>
            <StyledFontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </ToggleButton>
        </LinkTag>
      </NameTag>
      <Quotation>
        <StyledH4>
          SIMPLE RECIPES MADE FOR{" "}
          <Highlight>real, actual, everyday life.</Highlight>
        </StyledH4>
      </Quotation>
    </HeaderContainer>
  );
};

export default Header;
