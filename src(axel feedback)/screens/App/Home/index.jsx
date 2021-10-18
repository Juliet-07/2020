import { Flex } from "../../../components/Flex";
import { HomeStyles } from "./styles";
import HomeLeftWrapper from "./wrapper/left";
import HomeRightWrapper from "./wrapper/right";

const HomeComponent = ({ supervisor, admin }) => {
      return (
    <HomeStyles>
      <Flex alignItems="flex-start" justifyContent="space-between">
        <HomeLeftWrapper admin={admin} supervisor={supervisor} />
        <HomeRightWrapper />
      </Flex>
    </HomeStyles>
  );
};

export default HomeComponent;
