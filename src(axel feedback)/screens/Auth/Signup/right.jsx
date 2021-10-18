import { useState } from "react";
import { Formik, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "../../../components/Button";
import { Flex } from "../../../components/Flex";
import Input from "../../../components/Input";
import Checkbox from "../../../components/CheckBox";
import { AiOutlineEye as Eye } from "react-icons/ai";
import { AiOutlineEyeInvisible as CrossEye } from "react-icons/ai";
const validationSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
  // name: yup.string().required("This field is required"),
  // unit: yup.string().required("This field is required"),
});
const initialValues = {
  email: "",
  password: "",
  name: "",
  unit: "",
  code: "",
  supervisorCode: ""
};

const handleSubmit = async (history, values) => {
  console.log(values, 'valu')
  // const data = {...values}
  history.push("/signin");
};

const RightWrapper = () => {
  const [visible, setVisible] = useState(false);
  const [checkedSupervisor, setCheckedSupervisor] = useState(false);
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
                  type="text"
                  name="name"
                  required={true}
                  placeholder="Name"
                  handleChange={handleChange}
                />
              </div>
              <div className="input-wrapper">
                <Flex justifyContent="space-between">
                  <div className="grid-wrapper">
                    <Input
                      type="email"
                      name="email"
                      required={true}
                      placeholder="Email"
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="grid-wrapper select">
                    <select id="unit" name="unit" handleChange={handleChange}>
                      <option>Select Unit</option>
                      <option value="">Idea Engineering</option>
                      <option value="">Research</option>
                      <option value="">AI Studies</option>
                    </select>
                  </div>
                </Flex>
              </div>
              <div className="check-box input-wrapper">
                <Flex justifyContent="flex-start">
                  <Checkbox
                    feedback={true}
                    checked={checkedSupervisor}
                    handleCheckboxChange={() =>
                      setCheckedSupervisor(!checkedSupervisor)
                    }
                    text="Are you a Supervisor?"
                  />
                </Flex>
              </div>
              {checkedSupervisor ? (
                 <div className="input-wrapper">
                 <Input
                   type="text"
                   name="supervisorCode"
                   required={true}
                   placeholder="Supervisor Code"
                   handleChange={handleChange}
                 />
               </div>
              ) : null}
             
              <div className="input-wrapper">
                <Input
                  type={visible ? "text" : "password"}
                  name="password"
                  required={true}
                  placeholder="Password"
                  Icon={!visible ? Eye : CrossEye}
                  handleChange={handleChange}
                  setVisible={setVisible}
                  visible={visible}
                />
              </div>
              <div className="input-wrapper btn">
                <Button type="submit" height="60px" text="REGISTER" />
              </div>
            </Flex>
          </Form>
        )}
      </Formik>
      <div className="bottom-wrapper">
        <Flex flexDir="column" justifyContent="space-between">
          <div className="little-text">
            Already a member?{" "}
            <span>
              <Link className="link" to="/signin">
                Sign In
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
