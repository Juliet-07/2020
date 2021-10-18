import HomeComponent from "../../Home";
import Layout from "../Layout";

const AdminHome = () => {
  return (
    <Layout>
      <HomeComponent admin={true} />
    </Layout>
  );
};

export default AdminHome;
