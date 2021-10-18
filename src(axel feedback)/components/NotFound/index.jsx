import React from "react";
import { Link } from "react-router-dom";
import { NotFoundStyles } from "./NotFound.styles";
import { Flex } from "../Flex/index";
import Curve from "../../assets/Curve.svg";

const NotFound = () => {
  return (
    <NotFoundStyles>
      <Flex flexDir="column" justifyContent="space-around">
        <div className="errorMessage">
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            className="iconContainer"
          >
            <b>404</b>
            <img src={Curve} alt="Not Found Curve" width="100%" height="10%" />
          </Flex>
          <p> Sorry The Page You Requested Doesn't Exist</p>
        </div>
        <Link className="returnText" to="/">
          Take Me Back
        </Link>
      </Flex>
    </NotFoundStyles>
  );
};

export default NotFound;
