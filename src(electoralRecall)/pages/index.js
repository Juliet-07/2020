/*
 * page: Home
 * author: Favour George
 * Date: April 9, 2020
 * EmBED homepage
 */

import React from 'react';
import GeneralLayout from '../components/Layout/GeneralLayout';
import Landing from "../screens/LandingPage";
import withApollo from "../lib/apollo/withApollo";


const Home = () => {

  return (
    <GeneralLayout>
      <Landing/>
    </GeneralLayout>
  );
};

export default withApollo(Home);
