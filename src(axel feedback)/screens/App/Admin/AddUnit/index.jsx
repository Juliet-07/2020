import Modal from "../../../../components/Modal";
import { Formik, Form } from 'formik';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import Input from '../../../../components/Input';
// import Checkbox from '../../../../components/CheckBox';
import { AddUnitStyles } from "./styles";
import { Flex } from "../../../../components/Flex";
import Button from "../../../../components/Button";

const validationSchema = yup.object().shape({ 
    name: yup.string().required("Event name is a required field"),
    description: yup.string().required("Description is a required field"),
});
const initialValues = {  
    name: '',
    description: '',
    logo: ""
}

const handleSubmit = async (history, values) => {
    // const data = {...values}
    console.log("object")
  }

const CreateUnit = ({closeModal}) => {
    const history = useHistory()

    const form = (
        <AddUnitStyles>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values) =>  handleSubmit(history, values)}
            >
                {({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <Input
                                type="text"
                                name="name" 
                                required={true}
                                placeholder="Name Of Unit"
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <Input
                                type="text"
                                name="description" 
                                required={true}
                                placeholder="Description"
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <Input
                                type="file"
                                name="logo" 
                                required={true}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="button-wrapper">
                            <Flex justifyContent="flex-start">
                                <Button height="71px" width="271px" bgColor="00FF00" color="#000000" text="Add Unit" />
                            </Flex>
                        </div>
                    </Form>
                )}
            </Formik>
        </AddUnitStyles>
    )

    return (
        <Modal children={form} closeModal={closeModal} />
    )
}

export default CreateUnit;