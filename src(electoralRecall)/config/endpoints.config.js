/**
 * lib: endpoints
 * author: Favour George
 * Date: June 11, 2020
 * URI endpoints
 **/
import { MODE } from "../lib/constants";

export const SERVER_URL = MODE
  ? 'https://electoralrecall.herokuapp.com/graphql'
  : 'http://localhost:3003/graphql';