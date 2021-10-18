import { AssignSupervisorsStyles } from "./styles";
import { Flex } from "../../../../components/Flex";
import AssignLeftWrapper from "./wrapper/left";
import AssignRightWrapper from "./wrapper/right";
import Layout from "../Layout";

const AssignSupervisor = (props) => {
  return (
    <Layout>
      <AssignSupervisorsStyles>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <AssignLeftWrapper />
          <AssignRightWrapper />
        </Flex>
      </AssignSupervisorsStyles>
    </Layout>
  );
};

export default AssignSupervisor;
