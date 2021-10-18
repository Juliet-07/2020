// import styled from "styled-components";
//
// export const CustomFormWrapper = styled('div')`
//   .form {
//     background: white;
//     border-radius: 4px;
//     max-width: 500px;
//     margin: auto;
//     .title {
//       font-size: 1rem;
//       color: #6c6f6e;
//       font-weight: lighter;
//       margin: 0 15px;
//       @media (max-width: 450px) {
//         text-align: center;
//       }
//     }
//
//     form {
//       width: 80%;
//       margin: auto;
//       padding: 50px 0;
//
//       .btnWrapper {
//         display: flex;
//         justify-content: space-evenly;
//         align-items: center;
//         width: 100%;
//         margin-top: 1.5rem;
//       }
//
//       .formMain {
//         margin: 10px 0;
//         .inputWrapper {
//           margin: 10px 0;
//           input {
//             background: transparent;
//             border: none;
//             box-shadow: 3px 3px 4px -1px #aeaaaa;
//             border-radius: 4px;
//             width: 100%;
//             padding: 10px 15px;
//             color: #4c4e4d;
//           }
//         }
//
//         .invalid-feedback {
//           color: #f98249;
//           top: 1em;
//           position: relative;
//           font-size: 11px;
//           left: 1em;
//         }
//       }
//       @media (max-width: 450px) {
//         width: 90%;
//       }
//     }
//
//     @media (max-width: 900px) {
//       width: 100%;
//       margin: 50px auto 0;
//     }
//   }
// `;

import styled from "styled-components";

export const CustomFormWrapper = styled('div')`
    background: white;
    border-radius: 4px;
    max-width: 500px;
    margin: auto;

  .form {
    width: 100%;
    background: white;
    border-radius: 4px;
    margin: auto;
    
    .title {
      font-size: 1.4rem;
      color: #4d4d4c;
      font-weight: bold;
      margin: 0 15px;
      text-align: center;
      @media (max-width: 450px) {
        text-align: center;
      }
    }
    
    form {
      width: 80%;
      margin: auto;
      padding: 20px 0;
      
      .formMain {
        margin: 10px 0;
        
        .inputWrapper {
          position: relative;
          margin: 10px 0 20px 0;
          
          input {
            background: transparent;
            border: none;
            border-radius: 4px;
            width: 100%;
            padding: 10px 15px;
            color: #4c4e4d;
          }
        }
        
        .btnWrapper {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
          margin-top: 1.5rem;
        }
        
        .invalid-feedback {
          color: #f98249;
          bottom: -18px;
          font-weight: 400;
          position: absolute;
          font-size: 11px;
          left: 0;
        }
      }
      @media (max-width: 450px) {
        width: 90%;
      }
    }
    @media (max-width: 900px) {
      width: 100%;
      margin: 50px auto 0;
    }
  }
`;
