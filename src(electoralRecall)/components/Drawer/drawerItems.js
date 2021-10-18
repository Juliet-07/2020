/*
 * component: Drawer
 * author: George Favour 
 * Date: June 26, 2020
 * General Drawer for all views
 */
import React from "react";
import {RiGroupLine as SenatorsIcon} from 'react-icons/ri'
import {HiOutlineUserGroup as UsersIcon} from 'react-icons/hi'
import {AiOutlineUsergroupDelete as LegislatorsIcon} from 'react-icons/ai'
import { LogoutIcon, ManagementIcon, OverviewIcon, SettingsIcon } from "../../assets/svg";

export const drawerItems = [
  {
    name: "Overview",
    logo: <OverviewIcon width="20px" height="20px" color="#7f7f82" />,
    path: "/dashboard"
  },
  {
    name: "Manage Petitions",
    logo: <ManagementIcon width="20px" height="20px" color="#7f7f82" />,
    path: "/dashboard/petitions"
  },
  {
    name: "Settings",
    logo: <SettingsIcon width="20px" height="20px" color="#7f7f82" />,
    path: "/dashboard/settings"
  },
  {
    name: "Log Out",
    logo: <LogoutIcon width="20px" height="20px" color="#7f7f82" />,
    path: "/"
  }
];

export const adminDrawerItems = [
  {
    name: "Overview",
    logo: <OverviewIcon width="20px" height="20px" color="#7f7f82" />,
    path: "/ad/dashboard"
  },
  {
    name: "Senators",
    logo: <SenatorsIcon color="#7f7f82" />,
    path: "/ad/dashboard/senators"
  },
  {
    name: "Legislators",
    logo: <LegislatorsIcon color="#7f7f82" />,
    path: "/ad/dashboard/legislators"
  },
  {
    name: "Users",
    logo: <UsersIcon color="#7f7f82" />,
    path: "/ad/dashboard/users"
  },
  {
    name: "Settings",
    logo: <SettingsIcon width="20px" height="20px" color="#7f7f82" />,
    path: "/ad/dashboard/settings"
  },
  {
    name: "Log Out",
    logo: <LogoutIcon width="20px" height="20px" color="#7f7f82" />,
    path: "/"
  }
]