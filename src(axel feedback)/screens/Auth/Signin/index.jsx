import React from 'react';
import { SignInStyles } from './styles';
import LeftWrapper from "./left";
import RightWrapper from './right';
import { Flex } from '../../../components/Flex';
 
const index = () => {
    return (
        <SignInStyles>
          <div id="wrapper">
            <Flex justifyContent="space-between">
              <LeftWrapper />
              <RightWrapper />
            </Flex>
          </div>
        </SignInStyles>
    );
};

export default index;
