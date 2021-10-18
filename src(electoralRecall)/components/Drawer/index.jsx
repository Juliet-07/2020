/*
 * component: Drawer
 * author: George Favour 
 * Date: April 15, 2020
 * General Drawer for all views
 */

import React, { useContext, useState, useRef } from "react";
import { DrawerWrap, LI } from "./drawer.styles";
import { adminDrawerItems, drawerItems } from "./drawerItems";
import { ListIcon, RightArrowIcon } from "../../assets/svg";
import { FlexibleDiv } from "../Box/styles";
import { useRouter } from "next/router";
import Logo from "../../assets/images/electoral-recall-logo.png";
import { generateID } from "../../lib/generateID";
import { MODE } from "../../lib/constants";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../lib/queries/auth.gql";
import DrawerProfileCard from "./DrawerProfileCard";
import { USER_LOGOUT } from "../../store/types";
import Link from "next/link";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import AppContext from "../../store/context";

const Drawer = ({ handleLargeDrawer, largeDrawer, noDrawer, isAdmin }) => {
  const router = useRouter();
  const [onLogout] = useMutation(LOGOUT_USER);
  const { dispatch } = useContext(AppContext);

  const [liHover, setLiHover] = useState(false);
  const [drawerItemPositionFromTop, setDrawerPositionFromTop] = useState(0);

  const isActive = (href) => router.pathname === href;

  const handleLogout = async () => {
    await onLogout();
    dispatch({ type: USER_LOGOUT });

    if (isAdmin) {
      window.location.href = MODE
        ? "https://electoralrecall.ng/admin"
        : "http://localhost:3000/admin";
    } else {
      window.location.href = MODE
        ? "https://electoralrecall.ng/login"
        : "http://localhost:3000/login";
    }
  };

  const listItem = useRef();

  return (
    <DrawerWrap largeDrawer={largeDrawer} noDrawer={noDrawer} liHover={liHover}>
      <div className="desktopMainContainer">
        <FlexibleDiv
          className="enlargeDrawer iconize"
          onClick={() => handleLargeDrawer()}
        >
          <div className="ripple" />
          <ListIcon width="20px" height="20px" color="#88898c" />
        </FlexibleDiv>

        <DrawerProfileCard largeDrawer={largeDrawer} />

        <div className="container">
          {isAdmin ? (
            <OverFlowScrollBar className="flowing">
              <ul ref={listItem}>
                {adminDrawerItems.map(({ path, logo, name }, index) => {
                  if (name !== "Log Out") {
                    return (
                      <LI
                        key={generateID(20)}
                        className={`${isActive(path) ? "isActive" : ""}`}
                        onMouseEnter={() => {
                          setLiHover(index + 1);
                          setDrawerPositionFromTop(
                            listItem.current.children[
                              index
                            ].getBoundingClientRect().y
                          );
                        }}
                        onMouseLeave={() => {
                          setLiHover(-1);
                          setDrawerPositionFromTop(0);
                        }}
                        liHover={[liHover, index + 1]}
                        largeDrawer={largeDrawer}
                        drawerItemPositionFromTop={drawerItemPositionFromTop}
                      >
                        <Link href={path}>
                          <a className="drawerItem">
                            <div className="logoMain">{logo}</div>

                            {largeDrawer ? (
                              // if there is full drawer, render the drawerItem
                              <div className="drawer-item-main">
                                <div className="drawer-item-sub">
                                  <span>{name}</span>
                                </div>
                              </div>
                            ) : // if there is largeDrawer, and you are hovering over it, render the drawerItems
                              liHover === index + 1 ? (
                                <div className="drawer-item-main">
                                  <div className="drawer-item-sub">
                                    <span>{name}</span>
                                  </div>
                                </div>
                              ) : null}
                          </a>
                        </Link>
                      </LI>
                    );
                  } else {
                    return (
                      <LI
                        onClick={handleLogout}
                        key={generateID(20)}
                        className={`${isActive(path) ? "isActive" : ""}`}
                        onMouseEnter={() => {
                          setLiHover(index + 1);
                          setDrawerPositionFromTop(
                            listItem.current.children[
                              index
                            ].getBoundingClientRect().y
                          );
                        }}
                        onMouseLeave={() => {
                          setLiHover(-1);
                          setDrawerPositionFromTop(0);
                        }}
                        liHover={[liHover, index + 1]}
                        largeDrawer={largeDrawer}
                        drawerItemPositionFromTop={drawerItemPositionFromTop}
                      >
                        <a className="drawerItem">
                          <div className="logoMain">{logo}</div>

                          {largeDrawer ? (
                            // if there is full drawer, render the drawerItem
                            <div className="drawer-item-main">
                              <div className="drawer-item-sub">
                                <span>{name}</span>
                              </div>
                            </div>
                          ) : // if there is largeDrawer, and you are hovering over it, render the drawerItems
                            liHover === index + 1 ? (
                              <div className="drawer-item-main">
                                <div className="drawer-item-sub">
                                  <span>{name}</span>
                                </div>
                              </div>
                            ) : null}
                        </a>
                      </LI>
                    );
                  }
                })}
              </ul>
            </OverFlowScrollBar>
          ) : (
              <OverFlowScrollBar className="flowing">
                <ul ref={listItem}>
                  {drawerItems.map(({ path, logo, name }, index) => {
                    if (name !== "Log Out") {
                      return (
                        <LI
                          key={generateID(20)}
                          className={`${isActive(path) ? "isActive" : ""}`}
                          onMouseEnter={() => {
                            setLiHover(index + 1);
                            setDrawerPositionFromTop(
                              listItem.current.children[
                                index
                              ].getBoundingClientRect().y
                            );
                          }}
                          onMouseLeave={() => {
                            setLiHover(-1);
                            setDrawerPositionFromTop(0);
                          }}
                          liHover={[liHover, index + 1]}
                          largeDrawer={largeDrawer}
                          drawerItemPositionFromTop={drawerItemPositionFromTop}
                        >
                          <Link href={path}>
                            <a className="drawerItem">
                              <div className="logoMain">{logo}</div>

                              {largeDrawer ? (
                                // if there is full drawer, render the drawerItem
                                <div className="drawer-item-main">
                                  <div className="drawer-item-sub">
                                    <span>{name}</span>
                                  </div>
                                </div>
                              ) : // if there is largeDrawer, and you are hovering over it, render the drawerItems
                                liHover === index + 1 ? (
                                  <div className="drawer-item-main">
                                    <div className="drawer-item-sub">
                                      <span>{name}</span>
                                    </div>
                                  </div>
                                ) : null}
                            </a>
                          </Link>
                        </LI>
                      );
                    } else {
                      return (
                        <LI
                          onClick={handleLogout}
                          key={generateID(20)}
                          className={`${isActive(path) ? "isActive" : ""}`}
                          onMouseEnter={() => {
                            setLiHover(index + 1);
                            setDrawerPositionFromTop(
                              listItem.current.children[
                                index
                              ].getBoundingClientRect().y
                            );
                          }}
                          onMouseLeave={() => {
                            setLiHover(-1);
                            setDrawerPositionFromTop(0);
                          }}
                          liHover={[liHover, index + 1]}
                          largeDrawer={largeDrawer}
                          drawerItemPositionFromTop={drawerItemPositionFromTop}
                        >
                          <a className="drawerItem">
                            <div className="logoMain">{logo}</div>

                            {largeDrawer ? (
                              // if there is full drawer, render the drawerItem
                              <div className="drawer-item-main">
                                <div className="drawer-item-sub">
                                  <span>{name}</span>
                                </div>
                              </div>
                            ) : // if there is largeDrawer, and you are hovering over it, render the drawerItems
                              liHover === index + 1 ? (
                                <div className="drawer-item-main">
                                  <div className="drawer-item-sub">
                                    <span>{name}</span>
                                  </div>
                                </div>
                              ) : null}
                          </a>
                        </LI>
                      );
                    }
                  })}
                </ul>
              </OverFlowScrollBar>
            )}
        </div>
      </div>
    </DrawerWrap>
  );
};

export default Drawer;

export const ModalDrawer = ({ largeDrawer, noDrawer, handleNoDrawer, isAdmin }) => {
  const router = useRouter();
  const [onLogout] = useMutation(LOGOUT_USER);
  const { dispatch } = useContext(AppContext);
  const isActive = (href) => router.pathname === href;

  const handleLogout = async () => {
    await onLogout();
    dispatch({ type: USER_LOGOUT });

    if (isAdmin) {
      window.location.href = MODE
        ? "https://electoralrecall.ng/admin"
        : "http://localhost:3000/admin";
    } else {
      window.location.href = MODE
        ? "https://electoralrecall.ng/login"
        : "http://localhost:3000/login";
    }
  };

  return (
    <DrawerWrap largeDrawer={true} noDrawer={noDrawer}>
      <div
        className="modalMainContainerOverlay"
        onClick={() => handleNoDrawer()}
      />

      <div className="modalMainContainer">
        <div className="rightArrow iconize" onClick={() => handleNoDrawer()}>
          <div className="ripple" />
          <RightArrowIcon width="20px" height="20px" color="#b3b3b9" />
        </div>

        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" className="mainLogo" />
          </a>
        </div>

        <DrawerProfileCard largeDrawer={largeDrawer} noDrawer={noDrawer} />

        <div className="container">
          {isAdmin ? (
            <OverFlowScrollBar className="flowing">
              <ul>
                {adminDrawerItems.map(({ path, logo, name }) => {
                  if (name !== "Log Out") {
                    return (
                      <LI
                        key={generateID(20)}
                        noDrawer={noDrawer}
                        className={`${isActive(path) ? "isActive" : ""}`}
                      >
                        <Link href={path}>
                          <a className="drawerItem">
                            <div className="logoMain">{logo}</div>
                            <div className="drawer-item-main">
                              <div className="drawer-item-sub">
                                <span>{name}</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </LI>
                    );
                  } else {
                    return (
                      <LI
                        onClick={handleLogout}
                        key={generateID(20)}
                        noDrawer={noDrawer}
                        className={`${isActive(path) ? "isActive" : ""}`}
                      >
                        <a className="drawerItem">
                          <div className="logoMain">{logo}</div>
                          <div className="drawer-item-main">
                            <div className="drawer-item-sub">
                              <span>{name}</span>
                            </div>
                          </div>
                        </a>
                      </LI>
                    );
                  }
                })}
              </ul>
            </OverFlowScrollBar>
          ) : (
              <OverFlowScrollBar className="flowing">
                <ul>
                  {drawerItems.map(({ path, logo, name }) => {
                    if (name !== "Log Out") {
                      return (
                        <LI
                          key={generateID(20)}
                          noDrawer={noDrawer}
                          className={`${isActive(path) ? "isActive" : ""}`}
                        >
                          <Link href={path}>
                            <a className="drawerItem">
                              <div className="logoMain">{logo}</div>
                              <div className="drawer-item-main">
                                <div className="drawer-item-sub">
                                  <span>{name}</span>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </LI>
                      );
                    } else {
                      return (
                        <LI
                          onClick={handleLogout}
                          key={generateID(20)}
                          noDrawer={noDrawer}
                          className={`${isActive(path) ? "isActive" : ""}`}
                        >
                          <a className="drawerItem">
                            <div className="logoMain">{logo}</div>
                            <div className="drawer-item-main">
                              <div className="drawer-item-sub">
                                <span>{name}</span>
                              </div>
                            </div>
                          </a>
                        </LI>
                      );
                    }
                  })}
                </ul>
              </OverFlowScrollBar>
            )}
        </div>
      </div>
    </DrawerWrap>
  );
};
