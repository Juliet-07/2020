import React from "react";
import { Flex } from "../../../../components/Flex";
import LeftWrapper from "./left";
import RightWrapper from "./right";
import { JournalStyles } from "./styles"; 
import Layout from "../Layout";
const Journal = () => {
  return (
    <Layout>
    <JournalStyles>
      <Flex>
        <LeftWrapper />
        <RightWrapper />
      </Flex>
    </JournalStyles>
    </Layout>
  );
};

export default Journal;
