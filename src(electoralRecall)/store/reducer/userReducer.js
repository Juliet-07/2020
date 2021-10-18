/**
 * Author: George Favour
 * Date: 12th, August 2020
 * User reducer
 * */

import React from 'react';
import {
  SET_CURRENT_USER,
  USER_LOGOUT,
  TOGGLE_NO_DRAWER,
  TOGGLE_SMALL_DRAWER,
  SET_TEACHERS
} from "../types";


export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_LOGOUT:
      return {
        ...state,
        user: {}
      }

    case SET_CURRENT_USER:
      return {
        ...state,
        user: payload
      }

    case TOGGLE_SMALL_DRAWER:
      if (process.browser) {
        sessionStorage.setItem("ElR-largeDrawer", JSON.stringify(!state.app.largeDrawer));
      }
      return {
        ...state,
        app: {
          ...state.app,
          largeDrawer: !state.app.largeDrawer
        }
      }

    case TOGGLE_NO_DRAWER:
      if (process.browser) {
        sessionStorage.setItem("ElR-noDrawer", JSON.stringify(!state.app.noDrawer));
      }
      return {
        ...state,
        app: {
          ...state.app,
          noDrawer: !state.app.noDrawer
        }
      }

    case SET_TEACHERS:
      return {
        ...state,
        teachers: payload
      }

    default:
      return state;
  }
};