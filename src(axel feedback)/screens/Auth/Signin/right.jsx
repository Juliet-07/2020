import { useState } from "react";
import { Formik, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "../../../components/Button";
import { Flex } from "../../../components/Flex";
import Input from "../../../components/Input";
import { AiOutlineEye as Eye } from "react-icons/ai";
import { AiOutlineEyeInvisible as CrossEye } from "react-icons/ai";
const validationSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
});
const initialValues = {
  email: "",
  password: "",
};

const handleSubmit = async (history, values) => {
  const data = { ...values };
  console.log(data, "data");
  history.push("/home");
};

const RightWrapper = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  return (
    <div className="right-wrapper">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(history, values)}
      >
        {({ handleSubmit, handleChange }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <Flex>
              <div className="input-wrapper">
                <Input
                  type="email"
                  name="email"
                  required={true}
                  placeholder="Email"
                  handleChange={handleChange}
                />
              </div>
              <div className="input-wrapper">
                <Input
                  type={visible ? "text" : "password"}
                  name="password"
                  required={true}
                  placeholder="Password"
                  handleChange={handleChange}
                  Icon={!visible ? Eye : CrossEye}
                  setVisible={setVisible}
                  visible={visible}
                />
              </div>
              <div className="input-wrapper btn">
                <Button height="60px" text="LOGIN" />
              </div>
            </Flex>
          </Form>
        )}
      </Formik>
      <div className="bottom-wrapper">
        <Flex flexDir="column" justifyContent="space-between">
          <div className="little-text">
            New here?{" "}
            <span>
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </span>
          </div>
          <div className="little-text">
            Login with your springer/freetech account
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default RightWrapper;
