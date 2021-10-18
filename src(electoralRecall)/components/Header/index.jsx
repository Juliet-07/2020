/*
 * component: Header
 * author: Favour George
 * Date: April 15, 2020
 * Embed general header
 */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  HeaderBox,
  IconButton,
  Nav,
  ShowMenu,
} from "./header.style";
import AppContext from "../../store/context";
import Button from "../Button";
import { MdMenu as MenuIcon, MdClose as CloseIcon } from "react-icons/md";
import { FlexibleDiv } from "../Box/styles";
import Link from "next/link";
import { generateID } from "../../lib/generateID";
import Logo from "../../assets/images/electoral-recall-logo.png";
import Logo2 from "../../assets/images/electoral-recall-logo.png";
import { AvatarIcon2, LogoutIcon } from "../../assets/svg";
import { P } from "../FontSize/styles";
import { useMutation } from "@apollo/client";
import { USER_LOGOUT } from "../../store/types";
import { LOGOUT_USER } from "../../lib/queries/auth.gql";

const links = [
  { href: "/", label: "Home" },
  { href: "/recall", label: "Recall" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(undefined);
  const [menuPosition, setMenuPosition] = useState(0);
  const router = useRouter();
  const {
    state: { user },
  } = useContext(AppContext);

  const isActive = (href) => router.pathname === href;

  const handleScroll = () => setMenuPosition(window.scrollY);

  const [onLogout] = useMutation(LOGOUT_USER);
  const { dispatch } = useContext(AppContext);

  const handleLogout = async () => {
    await onLogout();
    dispatch({ type: USER_LOGOUT });

    window.location.href = MODE
      ? "https://electoralrecall.ng/login"
      : "http://localhost:3000/login";
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setMenuPosition(window.scrollY);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuPosition]);

  return (
    <FlexibleDiv onScroll={handleScroll}>
      <HeaderContainer menuPosition={menuPosition}>
        <HeaderBox showMenu={showMenu} menuPosition={menuPosition}>
          <FlexibleDiv className="major" justifyContent="space-between">
            <div className="logo">
              <a onClick={() => router.push("/")}>
                <img src={Logo} alt="logo" className="mainLogo" />
                <img src={Logo2} alt="logo" className="whiteLogo" />
              </a>
            </div>

            <div className={"mobileSection"}>
              <IconButton>
                <MenuIcon onClick={() => setShowMenu(!showMenu)} />
              </IconButton>
            </div>
          </FlexibleDiv>

          <div className={"desktopSection"}>
            <Nav menuPosition={menuPosition}>
              {links.map(({ href, label }, idx) => (
                <li
                  key={`${idx}-${label}`}
                  className={`${isActive(href) ? "isActive" : ""}`}
                >
                  <a href={href}>{label}</a>
                </li>
              ))}
              {user ? (
                <>
                  <FlexibleDiv>
                    <FlexibleDiv
                      className="profileMain"
                      onClick={() => router.push("/dashboard/settings")}
                    >
                      <P>Welcome {user.fullName}</P>
                      <AvatarIcon2 width="20px" height="20px" color="#b3b3b9" />
                    </FlexibleDiv>
                  </FlexibleDiv>
                  <FlexibleDiv onClick={handleLogout}>
                    <LogoutIcon width="20px" height="20px" color="#b3b3b9" />
                  </FlexibleDiv>
                </>
              ) : (
                <div className="btn">
                  <Button
                    size={"sm"}
                    text={"Login Here"}
                    type={"button"}
                    click={() => router.push("/login")}
                  />
                </div>
              )}
            </Nav>
          </div>
        </HeaderBox>
      </HeaderContainer>
    </FlexibleDiv>
  );
};

export default Header;
