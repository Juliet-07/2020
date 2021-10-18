import React from "react";
import { Link } from "react-router-dom";
import {
  DrawerStyles,
  // SecondDrawerStyles
} from "./Drawer.styles";
import { Flex } from "../../../../../components/Flex/index";
import { GoHome as HomeIcon } from "react-icons/go";
import { AiOutlineSchedule as JournalIcon } from "react-icons/ai";
import { RiFeedbackLine as FeedbackIcon } from "react-icons/ri";
import { BsBag as ReasourceIcon } from "react-icons/bs";
import { BiMessageAltAdd as QuickEvent } from "react-icons/bi";
import { MdSupervisorAccount as SupervisorIcon } from "react-icons/md";


export const Drawer = ({
  handleSecondaryDrawer,
  SecondaryDrawer,
  OpenModal,
}) => {
  const DrawerItems = [
    {
      id: 1,
      icon: <HomeIcon className="drawerItemsIcon" />,
      drawerLinks: "Home",
      path: "/admin",
    },
    {
      id: 2,
      icon: <SupervisorIcon className="drawerItemsIcon" />,
      drawerLinks: "Assign Supervisor",
      path: "/admin/supervisor",
    },
    {
      id: 3,
      icon: <FeedbackIcon className="drawerItemsIcon" />,
      drawerLinks: "Gather Feedback",
      path: "/admin/feedback",
    },
    {
      id: 4,
      icon: <ReasourceIcon className="drawerItemsIcon" />,
      drawerLinks: "Resources",
      path: "#",
    },
    {
      id: 5,
      icon: <JournalIcon className="drawerItemsIcon" />,
      drawerLinks: "Journals",
      path: "/admin/journal",
    },
  ];

  return (
    <DrawerStyles>
      <Flex
        flexDir="column"
        alignItems="center"
        className="drawerLinkWrapper"
        flexWrap="nowrap"
      >
        <Flex
          width="max-content"
          justifyContent="center"
          alignItems="center"
          className="logoSection"
        >
          <b>
            FreeTech <span>Academy</span>
          </b>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="flex-start"
          alignItems="center"
          className="drawerLink"
        >
          {DrawerItems.map(({ id, icon, drawerLinks, path }) => (
            <Link
              to={path}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              key={id}
            >
              {icon}
              <span>{drawerLinks}</span>
            </Link>
          ))}

          {/* <Link
            to="#"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className={
              SecondaryDrawer ? "drawerItems drawerItemsActive" : "drawerItems"
            }
            onClick={handleSecondaryDrawer}
          >
            {SecondaryDrawer ? (
              <Less className="drawerItemsIcon" />
            ) : (
              <More className="drawerItemsIcon" />
            )}
            <span>{SecondaryDrawer ? "Less" : "More"}</span>
          </Link> */}
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          className="drawerbutton"
        >
          <button onClick={OpenModal}>Add Unit</button>
          <button className="responsiveEventIcon" onClick={OpenModal}>
            <QuickEvent className="drawerItemsIcon" />
          </button>
        </Flex>
      </Flex>
    </DrawerStyles>
  );
};

// export const SecondDrawer = ({ hideDrawer, SecondaryDrawer }) => {
//   const secondDrawerItems = [
//     {
//       id: 1,
//       icon: <CheckIcon className="drawerItemsIcon" />,
//       drawerLinks: "Projects",
//       path: "/projects",
//     },
//     {
//       id: 2,
//       icon: <ArticleIcon className="drawerItemsIcon" />,
//       drawerLinks: "Articles",
//       path: "/articles",
//     },
//     {
//       id: 3,
//       icon: <EventIcon className="drawerItemsIcon" />,
//       drawerLinks: "Events",
//       path: "/events",
//     },
//   ];
//   return (
//     <SecondDrawerStyles hideDrawer={SecondaryDrawer}>
//       <Flex
//         flexDir="column"
//         alignItems="center"
//         className="drawerLinkWrapper"
//         flexWrap="nowrap"
//       >
//         <Flex
//           width="max-content"
//           justifyContent="center"
//           alignItems="center"
//           className="logoSection"
//         ></Flex>
//         <Flex
//           flexDir="column"
//           justifyContent="flex-start"
//           alignItems="center"
//           className="drawerLink"
//         >
//           {secondDrawerItems.map(({ id, icon, drawerLinks, path }) => (
//             <Link
//               to={path}
//               style={{
//                 justifyContent: "flex-start",
//                 alignItems: "center",
//                 display: "flex",
//               }}
//               id={id}
//             >
//               {icon}
//               <span>{drawerLinks}</span>
//             </Link>
//           ))}
//         </Flex>
//       </Flex>
//     </SecondDrawerStyles>
//   );
// };
