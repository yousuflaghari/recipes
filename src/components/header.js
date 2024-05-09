import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../utils/constants/constants";
import { theme } from "../styles/theme";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: ${theme.colors.nameColor};
`;

const LinkTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
`;

const StyledLink = styled(Link)`
  margin-right: 25px;
  font-weight: bold;
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
  color: ${theme.colors.highlightColor};
  font-size: x-large;
`;

const Header = () => {
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
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchIcon>
        </LinkTag>
      </NameTag>
      <Quotation>
        <h4>
          SIMPLE RECIPES MADE FOR{" "}
          <Highlight>real, actual, everyday life.</Highlight>
        </h4>
      </Quotation>
    </HeaderContainer>
  );
};

export default Header;
