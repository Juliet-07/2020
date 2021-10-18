import Modal from "../../../components/Modal";
import { Formik, Form } from 'formik';
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import Input from '../../../components/Input';
import Checkbox from '../../../components/CheckBox';
import { AddEventStyles } from "./styles";
import { Flex } from "../../../components/Flex";
import { DatePickerV1 } from "../../../components/DatePicker";
import FirstCalendarIcon from "./images/first_calendar.png";
import SecondCalendarIcon from "./images/second_calendar.png";
import {FaClock} from "react-icons/fa";
import Button from "../../../components/Button";

const validationSchema = yup.object().shape({ 
    name: yup.string().required("Event name is a required field"),
    description: yup.string().required("Description is a required field"),
    start_date: yup.string().required("Start date is a required field"), 
    end_date: yup.string().required("End date is a required field"),
    end_time: yup.string().required("End time is a required field"), 
    start_time: yup.string().required("Start time is a required field"), 
});
const initialValues = {  
    name: '',
    description: '',
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    is_recurring: true
}

const handleSubmit = async (history, values) => {
    const data = {...values}
    console.log(data, 'data');
  }

const CreateEvent = ({closeModal}) => {
    const history = useHistory()

    const form = (
        <AddEventStyles>
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
                                placeholder="Name Of Event"
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
                        <div className="date-wrapper">
                            <Flex justifyContent="space-between" alignItems="flex-start">
                                <div>
                                    <Flex justifyContent="flex-start" alignItems="flex-end">
                                        <div className="date-picker">
                                            <DatePickerV1 label="Start Date" />
                                        </div>
                                        <div>
                                            <img className="img" alt="calendar" src={FirstCalendarIcon} />
                                        </div>
                                    </Flex>
                                </div>
                                <div>
                                    <Flex justifyContent="flex-start" alignItems="flex-end">
                                        <div className="time-picker">
                                            <DatePickerV1 label="Time" />
                                        </div>
                                        <div>
                                            <FaClock className="img" size="32px" color="#0000FF" />
                                        </div>
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                        <div className="date-wrapper">
                            <Flex justifyContent="space-between" alignItems="flex-start">
                                <div>
                                    <Flex justifyContent="flex-start" alignItems="flex-end">
                                        <div className="date-picker">
                                            <DatePickerV1 label="End Date" />
                                        </div>
                                        <div>
                                            <img className="img" alt="calendar" src={SecondCalendarIcon} />
                                        </div>
                                    </Flex>
                                </div>
                                <div>
                                    <Flex justifyContent="flex-start" alignItems="flex-end">
                                        <div className="time-picker">
                                            <DatePickerV1 label="Time" />
                                        </div>
                                        <div>
                                            <FaClock className="img" size="32px" color="#00FF00" />
                                        </div>
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                        <div className="checkbox-wrapper">
                            <Flex justifyContent="flex-start">
                                <Checkbox text="Is Recurring" checked={initialValues.is_recurring} onChange={handleChange} />
                            </Flex>
                        </div>
                        <div className="button-wrapper">
                            <Flex justifyContent="flex-start">
                                <Button height="71px" width="271px" bgColor="00FF00" color="#000000" text="Add Event" />
                            </Flex>
                        </div>
                    </Form>
                )}
            </Formik>
        </AddEventStyles>
    )

    return (
        <Modal children={form} closeModal={closeModal} />
    )
}

export default CreateEvent;