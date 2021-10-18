import { Flex } from "../../../../../components/Flex";
import Rating from "react-rating";
import ratingIcon from "../images/rate.png";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import emptyIcon from "../images/empty.png";
import Checkbox from "../../../../../components/CheckBox";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import { useState } from "react";
const validationSchema = yup.object().shape({
  comment: yup.string().required("This field is required"),
});

const initialValues = {
  comment: "",
  participant: "",
};

const ratingData = [
  {
    text: "Innovation",
  },
  {
    text: "Decision Making",
  },
  {
    text: "Analytical Skills",
  },
  {
    text: "Result-Oriented",
  },
  {
    text: "Knowledge Transfer",
  },
  {
    text: "Communication",
  },
  {
    text: "Presentation",
  },
  {
    text: "Team Work",
  },
  {
    text: "Conflict Resolution",
  },
  {
    text: "Initiative",
  },
  {
    text: "Expertise",
  },
  {
    text: "Quality Standards",
  },
  {
    text: "Learning",
  },
];

const handleSubmit = async (history, values) => {
  // const data = {...values}
  console.log("object");
};

const FeedbackLeftWrapper = () => {
  const [checkedEmployee, setCheckedEmployee] = useState(true);
  const [checkedFeedback, setCheckedFeedback] = useState(true);
  const history = useHistory();
  return (
    <div className="left-wrapper">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(history, values)}
      >
        {({ handleSubmit, handleChange }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <div>
              <div className="grid-wrapper">
                <select id="unit" name="participant">
                  <option>Select A Participant</option>
                  <option value="">Justice Luke</option>
                  <option value="">Braden Love</option>
                  <option value="">Aima Gigarin</option>
                  <option value="">Daniel Walters</option>
                </select>
              </div>
              <div className="select-line" />
              <div className="note-container">
                <Flex justifyContent="space-between">
                  <div className="notes">Notes about participant</div>
                  <div className="notes">
                    <span className="number">1</span>
                    <span className="number">2</span>
                    <span className="number">3</span>
                    <span className="number">4</span>
                    <span className="number">5</span>
                  </div>
                </Flex>
              </div>
              <div className="rating-container">
                {ratingData.map((data, index) => (
                  <div className="rating-data">
                    <Flex key={index} justifyContent="space-between">
                      <div className="note-text">{data.text}</div>
                      <div className="rate-container">
                        <Rating
                          initialRating={1}
                          emptySymbol={
                            <img
                              src={emptyIcon}
                              className="rating"
                              alt="empty"
                            />
                          }
                          fullSymbol={
                            <img
                              src={ratingIcon}
                              className="rating"
                              alt="full"
                            />
                          }
                        />
                      </div>
                    </Flex>
                  </div>
                ))}
              </div>
              <div className="select-line" />
              <div className="check-box">
                <Flex justifyContent="flex-start">
                  <Checkbox
                    feedback={true}
                    checked={checkedEmployee}
                    handleCheckboxChange={() =>
                      setCheckedEmployee(!checkedEmployee)
                    }
                    text="Suitable as an employee"
                  />
                </Flex>
              </div>
              <div className="check-box">
                <Flex justifyContent="flex-start">
                  <Checkbox
                    feedback={true}
                    checked={checkedFeedback}
                    handleCheckboxChange={() =>
                      setCheckedFeedback(!checkedFeedback)
                    }
                    text="Feedback discussion took place"
                  />
                </Flex>
              </div>
              <div className="check-box">
                <Flex
                  flexDir="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <div className="comment">Comments</div>
                  <div className="input">
                    <Input
                      placeholder=""
                      handleChange={handleChange}
                      name="comment"
                    />
                  </div>
                </Flex>
              </div>
              <div className="btn">
                <Flex justifyContent="flex-start">
                  <Button width="208px" height="57px" text="Submit" />
                </Flex>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackLeftWrapper;
