import HomeComponent from "../../Home";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <HomeComponent supervisor={true} />
    </Layout>
  );
};

export default Home;
