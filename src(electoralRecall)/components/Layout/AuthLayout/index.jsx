/*
 * component: AuthLayout
 * author: George Favour 
 * Date: April 15, 2020
 * General layout for unauthenticated views
 */

import React, { useContext } from "react";
import AuthHeader from "../../Header/AuthHeader";
import { LayoutMain } from "./styles";
import Drawer, { ModalDrawer } from "../../Drawer";
import AppContext from "../../../store/context";
import { TOGGLE_NO_DRAWER, TOGGLE_SMALL_DRAWER } from "../../../store/types";

const AuthLayout = ({ noPadding, children, admin }) => {
  /*
 * The context of the drawer is persisted from the global store,
 * hence the deprecation of the local states which were handling
 * that function before.
 *
 * Dispatch() call will internally handle the drawer modes
 * */
  const { state: { app }, dispatch } = useContext(AppContext);

  const handleNoDrawer = () => dispatch({ type: TOGGLE_NO_DRAWER });
  const handleLargeDrawer = () => dispatch({ type: TOGGLE_SMALL_DRAWER });

  return (
    <div>
      <AuthHeader
        largeDrawer={app.largeDrawer}
        handleNoDrawer={handleNoDrawer}
      />
      <Drawer
        isAdmin={admin}
        noDrawer={app.noDrawer}
        largeDrawer={app.largeDrawer}
        handleNoDrawer={handleNoDrawer}
        handleLargeDrawer={handleLargeDrawer}
      />
      <ModalDrawer
        isAdmin={admin}
        noDrawer={app.noDrawer}
        largeDrawer={app.largeDrawer}
        handleNoDrawer={handleNoDrawer}
        handleLargeDrawer={handleLargeDrawer}
      />
      <LayoutMain
        largeDrawer={app.largeDrawer}
        noPadding={noPadding}
      >
        {children}
      </LayoutMain>
    </div>
  );
};

export default AuthLayout;