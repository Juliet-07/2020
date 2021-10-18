import React, { useState } from "react";
import { Flex } from "../../Flex";
import { HeaderStyle } from "./styles";
import { FaSearch as Search } from "react-icons/fa";
import { IoMdNotificationsOutline as Notification } from "react-icons/io";
import ProfileImage from "../../../assets/profile-image.jpg";
import ProfileMenu from "./profileMenu";

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const handleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  const closeProfileMenu = () => setShowProfileMenu(false);

  return (
    <HeaderStyle>
      <Flex justifyContent="flex-end" alignItems="center" className="features">
        <Flex
          width="70%"
          justifyContent="flex-end"
          alignItems="center"
          className="inputSection"
        >
          <input type="text" placeholder="Looking For Something?" />
          <Flex
            width="max-content"
            justifyContent="center"
            alignItems="center"
            className="searchWrapper"
          >
            <Search className="searchIcon" />
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          className="notificationSection"
        >
          <Notification className="notificationIcon" />
          <Flex className="badgeCount">
            <label>14</label>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          className="profileSection"
          onClick={handleProfileMenu}
        >
          <img
            src={ProfileImage}
            alt="Profile"
            height="90%"
            width="90%"
          />
        </Flex>
        <ProfileMenu
          showProfileMenu={showProfileMenu}
          closeProfileMenu={closeProfileMenu}
        />
      </Flex>
    </HeaderStyle>
  );
};
export default Header;
