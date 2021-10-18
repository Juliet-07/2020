import { ProfileStyles } from "./style";
import Body from "./profile.components/body";
import Layout from "../Layout";

const Profile = () => {
  return (
    <Layout>
      <ProfileStyles>
        <Body />
      </ProfileStyles>
    </Layout>
  );
};

export default Profile;
