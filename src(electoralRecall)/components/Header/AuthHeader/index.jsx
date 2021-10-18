/*
 * component: Header
 * author: Favour George
 * Date: April 15, 2020
 * Embed general header
 */

import React, { useState } from "react";
import { HeaderBox, HeaderContainer, Icon } from "./styles";
import { MdClose as CloseIcon, MdMenu as MenuIcon } from "react-icons/md";
import { FlexibleDiv } from "../../Box/styles";
import Logo from "../../../assets/images/electoral-recall-logo.png";
import { AvatarIcon2, MessageIcon, NotificationIcon, RightArrowIcon, SearchIcon, } from "../../../assets/svg";

const AuthHeader = ({ largeDrawer, handleNoDrawer }) => {
  const [showMenu, setShowMenu] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");
  const [focusedOnSearch, setFocusedOnSearch] = useState(false);

  return (
    <HeaderContainer largeDrawer={largeDrawer}>
      <HeaderBox showMenu={showMenu}>
        <FlexibleDiv
          className="major"
          justifyContent="space-between"
          flexWrap="nowrap"
        >
          <div className="rightArrow iconize" onClick={() => handleNoDrawer()}>
            <div className="ripple" />
            <RightArrowIcon width="20px" height="20px" color="#b3b3b9" />
          </div>

          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" className="mainLogo" />
            </a>
          </div>

          <FlexibleDiv
            className={focusedOnSearch ? "inputMain focused" : "inputMain"}
            flexWrap="nowrap"
            alignItems="stretch"
          >
            <FlexibleDiv className="search">
              <SearchIcon
                width="15px"
                height="15px"
                color={focusedOnSearch ? "#b3b3b9" : "#BFC5D2"}
              />
            </FlexibleDiv>
            <div className="input">
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search"
                onFocus={() => setFocusedOnSearch(true)}
                onBlur={() => setFocusedOnSearch(false)}
              />
            </div>
            {searchValue.length > 0 && (
              <FlexibleDiv
                className="cancel"
                onClick={() => setSearchValue("")}
              >
                <CloseIcon
                  width="20px"
                  height="20px"
                  color={focusedOnSearch ? "#b3b3b9" : "#BFC5D2"}
                />
              </FlexibleDiv>
            )}
          </FlexibleDiv>

          <div className={"mobileMenuIcon"}>
            <Icon>
              <MenuIcon onClick={() => setShowMenu(!showMenu)} />
            </Icon>
          </div>
        </FlexibleDiv>

        <div className="mobileOverlay" onClick={() => setShowMenu(!showMenu)} />
        <FlexibleDiv
          className="desktopSection"
          flexWrap="nowrap"
          justifyContent="space-between"
        >
          <FlexibleDiv
            className="icons"
            flexWrap="nowrap"
            justifyContent="flex-end"
          >
            <FlexibleDiv className="notifcationMain">
              <FlexibleDiv className="notifyMeassage">
                <FlexibleDiv>7</FlexibleDiv>
              </FlexibleDiv>
              <NotificationIcon width="20px" height="20px" color="#b3b3b9" />
            </FlexibleDiv>

            <FlexibleDiv>
              <FlexibleDiv className="profileMain">
                <AvatarIcon2 width="20px" height="20px" color="#b3b3b9" />
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default AuthHeader;
