import {gql} from '@apollo/client';

export const SIGNUP = gql`
  mutation($data: addUserInput!) {
    userCreateAccount(data: $data) {
      _id
      token
      email
      accountType
    }
  }
`;
export const SIGNIN = gql`
  mutation($data: UserLoginInput!) {
    userLogin(data: $data) {
      token
      accountType
    }
  }
`;

export const VERIFY = gql`
  mutation($data: activateMobileUserInput!) {
    userActivateMobile(data: $data)
  }
`;

export const UPDATEPROFILE = gql`
  mutation($data: addPersonProfileInput!) {
    updatePersonProfile(data: $data)
  }
`;
export const ADDNEWCHILD = gql`
  mutation($data: addStudentInput!) {
    userAddStudent(data: $data) {
      _id
      username
      fullName
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`;
