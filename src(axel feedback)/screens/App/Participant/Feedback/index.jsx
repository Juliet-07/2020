import React from "react";
import { Flex } from "../../../../components/Flex";
import LeftWrapper from "./left";
import RightWrapper from "./right";
import { FeedbackStyles } from "./styles"; 
import Layout from "../Layout";
const Feedback = () => {
  return (
    <Layout>
    <FeedbackStyles>
      <Flex>
        <LeftWrapper />
        <RightWrapper />
      </Flex>
    </FeedbackStyles>
    </Layout>
  );
};

export default Feedback;
