import React from "react";
import AdminAuthComponent from "../../components/Auth/adminLogin";
import {ChatIcon} from "../../assets/svg";
import LoginForm from "../../screens/AuthPages/Login";
import withApollo from "../../lib/apollo/withApollo";

const AdminLogin = () => {
  const tab = [
    {
      id: 1,
      icon: <ChatIcon height="12px" width="12px" color="#6c006c"/>,
      title: "Admin",
      bodyText: "Administrator login",
      content: <LoginForm type={2} user={"admin"}/>,
    },
  ];

  return (
    <div>
      <AdminAuthComponent tab={tab}/>
    </div>
  );
};

export default withApollo(AdminLogin);
