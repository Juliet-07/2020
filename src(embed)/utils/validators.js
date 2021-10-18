/**
 * A Validation schema Generators takes in a validation engines with fields and rules side by side in an array
 */
// generateValidationSchema(['email', 'password', 'name'], ["EMAIL", "PASSWORD", "REQUIRED"])
const generateValidationSchema = (yup, fields = [], rules = []) => {
    // Define All Validation Constants in Schema Here
    const REQUIRED = yup.string().required('This field is required');
    const PHONE = yup.string().required('Phone number is required');
    const EMAIL = yup.string().email().required('Email is required');
    const PASSWORD = yup.string().required('Password is required').min(6);
    const COMFIRMPASSWORD = yup.string().required().min(6);
    // const PROPERTYNAME
    // const PROPERTYADDRESS
    // const PROPERTYTYPE
    const schema = {REQUIRED, EMAIL, PHONE, PASSWORD, COMFIRMPASSWORD};
  
    let fieldMap = {};
    for (let idx in fields) {
      fieldMap[fields[idx]] = schema[rules[idx]];
    }
  
    return yup.object({...fieldMap});
  };
  
  export default generateValidationSchema;
  