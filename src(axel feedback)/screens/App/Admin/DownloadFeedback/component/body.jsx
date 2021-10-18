import {Formik } from 'formik'
import * as yup from 'yup';
import Button from '../../../../../components/Button';
import {DatePickerV1} from '../../../../../components/DatePicker';
import feedbackIcon from '../images/feedback_icon.svg';

const Body = () => {
    return (
    <div className="container">
        <div className="feedback-header-wrapper">
            <img src={feedbackIcon} alt="feedback" className="feedback-header-icon"/>
            <p>Gather Feedback</p>
        </div>
        <Formik
            validationSchema={
                yup.object({
                    date: yup.string().required('Date field is required'),
                    unit: yup.string().required('unit field is required'),
                    format: yup.string().required('format field is required')
                })
            }
            onSubmit={(values, { setSubmitting,resetForm}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                }, 400);
        }}
        >
        {(props) => (
            <form>
                <div className="feedback-body-date-picker-wrapper">
                    <DatePickerV1 label="Start Date"/>
                </div>
                <select name="unit" className="feedback-body-select">
                    <option>Select unit</option>
                    <option value="unit1">unit1</option>
                    <option value="unit2">unit2</option>
                    <option value="unit3">unit3</option>
                    <option value="unit4">unit4</option>
                </select>
                <select name="format" className="feedback-body-select">
                    <option>Select format</option>
                    <option value='pdf'>pdf</option>
                    <option value='csv'>csv</option>
                    <option value='docx'>docx</option>
                    <option value='epub'>epub</option>
                    <option value='mobi'>mobi</option>
                </select>
                <Button text="Download" width="50%" marginTop="1rem"/>
            </form>
        )}
        </Formik>
   </div>
    )
}

export default Body;