import { Flex } from "../../../../components/Flex";
import { FeedbackStyles } from "./styles";
import FeedbackLeftWrapper from "./wrapper/left";
import FeedbackRightWrapper from "./wrapper/right";
import Layout from "../Layout";

const Feedback = (props) => {
  return (
    <Layout>
      <FeedbackStyles>
        <div className="header">
          <div className="title">Give Feedback</div>
          <div className="title-line" />
        </div>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <FeedbackLeftWrapper />
          <FeedbackRightWrapper />
        </Flex>
      </FeedbackStyles>
    </Layout>
  );
};

export default Feedback;
