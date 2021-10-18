// /*
//  * component: CustomForm
//  * author: George Favour
//  * Date: April 16th, 2020
//  * EmBED CustomForm component
//  */
//
// import React from "react";
// import {CustomFormWrapper} from "./styles";
// import {ErrorMessage, Form, Formik} from "formik";
// import {generateID} from "../../lib/generateID";
// import Button from "../Button";
// import {genFormElements} from '../../lib/getFormElements'
// import {useRouter} from "next/router";
// import {FlexibleDiv} from "../Box/styles";
//
// const CustomForm = ({formData, initialValues, validationSchema, onSubmit, withFormik, btnTxt, secondBtnTxt}) => {
//   const router = useRouter();
//
//   return (
//     <CustomFormWrapper>
//       <div className="form">
//         <Formik
//           initialValues={{...initialValues}}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({isSubmitting}) => (
//             <Form>
//               {formData.map(item => (
//                 <>
//                   {withFormik ? (
//                     <FlexibleDiv
//                       flexDir="column"
//                       alignItems={"stretch"}
//                       className={"inputWrapper"}
//                       key={generateID(20)}
//                     >
//                       {genFormElements(item, withFormik)}
//                     </FlexibleDiv>
//                   ) : (
//                     <FlexibleDiv
//                       flexDir="column"
//                       alignItems={"stretch"}
//                       className={"inputWrapper"}
//                       key={generateID(20)}
//                     >
//                       {genFormElements(item)}
//                     </FlexibleDiv>
//                   )}
//                   <div>
//                     <ErrorMessage
//                       name={item.name}
//                       component="div"
//                       className="invalid-feedback"
//                     />
//                   </div>
//                 </>
//               ))}
//
//               <div className="btnWrapper">
//                 <Button
//                   loading={isSubmitting}
//                   type={"submit"}
//                   text={btnTxt}
//                 />
//                 <Button
//                   type={"button"}
//                   text={secondBtnTxt}
//                   click={() => router.back()}
//                   variant={"secondary"}
//                 />
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </CustomFormWrapper>
//   );
// };
//
// export default CustomForm;

import React from "react";
import propTypes from "prop-types";
import { CustomFormWrapper } from "./styles";
import { FlexibleDiv } from "../Box/styles";
import { ErrorMessage, Form, Formik } from "formik";
import Button from "../Button";
import TextArea from "../Inputs/TextArea";
import TextField from "../Inputs/TextField";
import Select from "../Inputs/Select";
import {useRouter} from "next/router";

const CustomForm = ({
  btnTxt,
  btnColor,
  formData,
  onSubmit,
  formTitle,
  withFormik,
  secondBtnTxt,
  secondBtnFunc,
  initialValues,
  validationSchema,
  ...props
}) => {
  const router = useRouter();

  return (
    <CustomFormWrapper btnColor={btnColor}>
      <div className="form">
        <Formik
          validationSchema={validationSchema}
          initialValues={{ ...initialValues }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, isDirty }) => (
            <Form>
              <h1 className="title">{formTitle}</h1>

              <div className="formMain">
                <FlexibleDiv flexDir="column" alignItems="stretch">
                  {formData.map((item, idx) => (
                    <div key={`${item.name}-${idx}`} className="inputWrapper">
                      <>
                        {item.inputtype === "select" ? (
                          <Select
                            // withFormik={withFormik}
                            options={item.options}
                            {...item}
                            {...props}
                          />
                        ) : item.inputtype === "multiple-select" ? (
                          <Select
                            multiple
                            // withFormik={withFormik}
                            options={item.options}
                            {...item}
                            {...props}
                          />
                        ) : item.type === "textarea" ? (
                          <TextArea
                            withFormik={withFormik}
                            {...item}
                            {...props}
                          />
                        ) : (
                          <TextField
                            withFormik={withFormik}
                            {...item}
                            {...props}
                          />
                        )}
                      </>
                      <div>
                        <ErrorMessage
                          name={item.name}
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="btnWrapper">
                    <Button
                      fullWidth
                      text={btnTxt}
                      type={"submit"}
                      className={"button"}
                      loading={isSubmitting}
                      disabled={isSubmitting || isDirty}
                    />

                    {secondBtnTxt && (
                      <Button
                        fullWidth
                        type={"submit"}
                        text={secondBtnTxt}
                        variant={"secondary"}
                        click={() => secondBtnFunc ? secondBtnFunc() : router.back()}
                        className={"button secondButton"}
                      />
                    )}
                  </div>
                </FlexibleDiv>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </CustomFormWrapper>
  );
};

CustomForm.defaultProps = {
  withFormik: false
}

CustomForm.propTypes = {
  validationSchema: propTypes.object.isRequired,
  initialValues: propTypes.object.isRequired,
  onSubmit: propTypes.func.isRequired,
  formData: propTypes.array.isRequired,
  btnTxt: propTypes.string.isRequired,
  btnColor: propTypes.string,
  withFormik: propTypes.bool
};

export default CustomForm;
