import {gql} from '@apollo/client';

export const GETCHILDREN = gql`
  query {
    getParentChildren {
      fullName
      level
      lastSeen
    }
  }
`;
export const GETCURRENTUSER = gql`
  query {
    getCurrentUser {
      _id
      email
      phone
      createdAt
      profileData {
        fullName
        address
        gender
        nationality
        bio
        state
        children{
          _id
          fullName
        }
      }
    }
  }
`;
