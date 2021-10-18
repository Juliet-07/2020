import AuthLayout from "../../../components/Layout/AuthLayout";
import CustomForm from "../../../components/Form";
import * as Yup from "yup";
import { P } from "../../../components/FontSize/styles";
import { UserSettingsWrap } from "./styles";
const formData = [
  {
    name: "name",
    type: "text",
    label: "Name",
    inputtype: "input",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    inputtype: "input",
  },
  {
    name: "phone",
    type: "text",
    label: "Phone",
    inputtype: "input",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    inputtype: "input",
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirm Password",
    inputtype: "input",
  },
];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  phone: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
const UserSettings = () => {
  const handleSubmit = (values) => {
    console.log(values, "values");
  };

  return (
    <AuthLayout>
      <UserSettingsWrap>
        <aside>
          <h5>User Settings</h5>
          <P>
            <strong>Note:</strong> Changing your email address will require a
            re-verification process
          </P>
        </aside>
        <main className="form-wrapper">
          <CustomForm
            withFormik
            formData={formData}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            btnTxt={"Update Profile"}
            secondBtnTxt="Cancel"
            btnColor="#6C006C"
          />
        </main>
      </UserSettingsWrap>
    </AuthLayout>
  );
};
export default UserSettings;
