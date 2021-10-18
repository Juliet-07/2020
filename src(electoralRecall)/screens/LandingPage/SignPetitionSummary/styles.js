import styled from "styled-components";

export const SignPetitionSummaryWrap = styled('div')`
  background-color: #003333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 6rem;
  
  .info {
    text-align: center;
    
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }
  
  .geolocation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin: 3rem auto 1rem;
    
    a {
      border-radius: 4px;
      border: 1px dashed dodgerblue;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem 1.5rem;
      margin: 0.5rem auto;
      transition: all ease-in-out .2s;
      
      h3, h5 {
        color: rgb(55, 129, 165);
      } 
      
      &:hover {
        border: 1px solid dodgerblue;
        box-shadow: -2px 3px 4px -2px rgba(140,226,236,0.8);
      }
    }
  }
  
  @media screen and (max-width: 824px) {
    padding: 2rem;
    
    .info {
      h3 {
        font-size: 1.68rem;
      }
    }
    
    .geolocation {
      flex-direction: column;
      
      a {
        width: 90%;
        padding: 1.5rem;
        margin: 1rem auto;
      }
    }
  }
`;