import React from "react";
import { ProfileMenuStyle } from "./styles";
import { Link } from "react-router-dom";
import { Flex } from "../../../../../../components/Flex";
import { IoMdPerson as PersonIcon } from "react-icons/io";
import { BiCog as AccountSettingIcon } from "react-icons/bi";
import { FaPowerOff as LogoutIcon } from "react-icons/fa";

const ProfileMenu = ({ showProfileMenu, primaryMenu, closeProfileMenu }) => {
  const DrawerItems = [
    {
      id: 1,
      icon: <PersonIcon className="drawerItemsIcon" />,
      drawerLinks: "Profile",
      path: "/supervisor/supervisorProfile",
    },
    {
      id: 2,
      icon: <AccountSettingIcon className="drawerItemsIcon" />,
      drawerLinks: "Account Setting",
      path: "#",
    },
    {
      id: 3,
      icon: <LogoutIcon className="drawerItemsIcon" />,
      drawerLinks: "Logout",
      clsName: "clsName",
      path: "#",
    },
  ];

  return (
    <ProfileMenuStyle primaryMenu={showProfileMenu}>
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        className="drawerLink"
      >
        {DrawerItems.map(({ id, icon, drawerLinks, clsName, path }) => (
          <Link
            to={path}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            onClick={() => {
              closeProfileMenu();
            }}
            key={id}
          >
            {icon}
            <span className={clsName ? "clsName" : ""}>{drawerLinks}</span>
          </Link>
        ))}
      </Flex>
    </ProfileMenuStyle>
  );
};
export default ProfileMenu;
