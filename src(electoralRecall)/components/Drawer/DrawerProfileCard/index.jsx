import React, { useContext } from "react";
import { DrawerProfileCardWrap } from "./styles";
import { FlexibleDiv } from "../../Box/styles";
import { AvatarIcon3 } from "../../../assets/svg";
import AppContext from "../../../store/context";
import { P } from "../../FontSize/styles";
import { capitalizeWords, truncate } from "../../../lib/factory.lib";

const DrawerProfileCard = ({ largeDrawer, noDrawer }) => {
  const {
    state: { user },
  } = useContext(AppContext);

  return (
    <DrawerProfileCardWrap largeDrawer={largeDrawer} noDrawer={noDrawer}>
      <FlexibleDiv
        // width="200px"
        height="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="no-wrap"
      >
        <div className="profile-container">
          <FlexibleDiv className="pictureframe" width="35px" height="35px">
            <AvatarIcon3 width="35px" height="35px" color={"#23A15B"} />
          </FlexibleDiv>
        </div>

        <FlexibleDiv
          className="profile-detail"
          flexDir="column"
          width="65%"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <P weight="500">{truncate(capitalizeWords(user.fullName), 16)}</P>
        </FlexibleDiv>
      </FlexibleDiv>
    </DrawerProfileCardWrap>
  );
};

export default DrawerProfileCard;
