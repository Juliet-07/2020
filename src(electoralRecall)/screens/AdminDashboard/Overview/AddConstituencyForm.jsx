import React from 'react';
import AuthLayout from "../../../components/Layout/AuthLayout";
import {P} from "../../../components/FontSize/styles";
import Spacer from "../../../components/Spacer";
import CustomForm from "../../../components/Form";
import {AdminSenatorsWrap} from "../Senators/styles";
import * as Yup from "yup";


const initialValues = {
  state: '',
  type: '',
  title: ''
}

const validationSchema = Yup.object().shape({
  state: Yup.string().required("State is required"),
  type: Yup.string().required("Select type of constituency"),
  title: Yup.string().required("Title is required"),
})

const formData = [
  {
    name: 'state',
    type: 'text',
    required: true,
    inputtype: 'input',
    label: 'Senator\'s Name'
  },
  {
    name: 'type',
    type: 'text',
    required: true,
    inputtype: 'select',
    defaultValue: 'Select Type',
    options: ["Senatorial", "Legislature"],
    label: 'Constituency Type'
  },
  {
    name: 'title',
    type: 'text',
    required: true,
    inputtype: 'input',
    label: 'Title',
  },
]

const AddConstituencyForm = () => {

  const handleSubmit = (values, {setSubmitting}) => {
    console.log(values, 'values')
    setSubmitting(false)
  }

  const handleChange = (e) => {
    console.log(e, 'event')
  }

  return (
    <AuthLayout admin>
      <AdminSenatorsWrap>
        <section className="top-layer">
          <aside>
            <h5>Add Constituency</h5>
            <P>
              Add verifiable information to the Database
            </P>
          </aside>
        </section>

        <Spacer mx={"3rem"}/>

        <CustomForm
          withFormik
          btnTxt={"Save"}
          formData={formData}
          secondBtnTxt={"Close"}
          onSubmit={handleSubmit}
          handleChange={handleChange}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </AdminSenatorsWrap>
    </AuthLayout>
  );
};

export default AddConstituencyForm;
