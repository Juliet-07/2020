import React from 'react';
import CustomForm from "../../../components/Form";
import * as Yup from 'yup'
import AuthLayout from "../../../components/Layout/AuthLayout";
import {AdminSenatorsWrap} from "./styles";
import {P} from "../../../components/FontSize/styles";
import Spacer from "../../../components/Spacer";


const initialValues = {
  name: '',
  party: '',
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Senator's name is required"),
})

const formData = [
  {
    name: 'name',
    type: 'text',
    required: true,
    inputtype: 'input',
    label: 'Senator\'s Name'
  },
  {
    name: 'state',
    type: 'text',
    required: true,
    inputtype: 'select',
    defaultValue: 'Select State',
    options: ["Abia", "Adamawa"],
    label: 'Senator\'s State'
  },
  {
    name: 'constituency',
    type: 'text',
    required: true,
    inputtype: 'select',
    options: ["Ukwa West", "Enugu Ukwu"],
    label: 'Senator\'s Constituency',
    defaultValue: "Select Consituency"
  },
  {
    name: 'party',
    type: 'text',
    required: true,
    inputtype: 'select',
    label: 'Senator\'s Party',
    options: ["APC", "PDP", "YDP"],
    defaultValue: "Select Party"
  },
  {
    name: 'year',
    type: 'text',
    required: true,
    inputtype: 'input',
    label: 'Senator\'s Years in Service'
  },
]

const AddSenatorsForm = () => {

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
            <h5>Add Senator</h5>
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

export default AddSenatorsForm;
