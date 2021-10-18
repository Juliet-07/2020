import { Flex } from "../../../../../components/Flex";
import { Formik, Form } from 'formik';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import supervisor from "../images/supervisor.png"
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
const validationSchema = yup.object().shape({ 
  email: yup.string().email().required("This field is required"),
  unit: yup.string().required("This field is required"),
});

const initialValues = {  
  unit: "",
  email: ""
}

const handleSubmit = async (history, values) => {
  // const data = {...values}
  console.log("object")
}


const AssignLeftWrapper = () => {
  const history = useHistory()
  return (
        <div className="left-wrapper">
          <Flex justifyContent="flex-start">
            <img className="supervisor" src={supervisor} alt="supervisor" />
            <div className="title">Generate signup code for a supervisor</div>
          </Flex>
          <div className="select-line" />
          <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values) =>  handleSubmit(history, values)}
            >
              {({ handleSubmit, handleChange }) => (
                  <Form className="form" onSubmit={handleSubmit}>
                      <div>
                        <div className="grid-wrapper">
                          <select onChange={handleChange} id="unit" name="unit">
                              <option>Select Unit</option>
                              <option value="">Ideas Engineering</option>
                              <option value="">Product Design</option>
                              <option value="">AI Architecture</option>
                          </select>
                          <div className="input">
                            <Input name="email" placeholder="email" required={true} />
                          </div>
                        </div>
                        <div className="btn">
                          <Flex justifyContent="flex-start">
                            <Button width="208px" height="57px" text="Generate Code" />
                          </Flex>
                        </div>
                      </div>
                  </Form>
              )}
          </Formik>
        </div>
    )
}

export default AssignLeftWrapper;