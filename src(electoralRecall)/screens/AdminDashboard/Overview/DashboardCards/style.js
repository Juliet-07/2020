import styled from 'styled-components'

export const DashboardCardWrap = styled('div')`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  @media screen and (max-width: 824px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  
  @media screen 
    and (min-device-width: 825px) 
    and (max-device-width: 1020px) {
      .card-data {
        display: flex;
        background-color: yellow;
        flex-direction: column;
      }
    }
  
  .card-data__wrap {
    border-radius: 4px;
    padding: 2rem 1rem;
    background-color: #E2E2E2;
    transition: background-color ease-in-out .2s;
    cursor: pointer;
    
    &:hover {
      background-color: #FEFEFE;
      
      .card-data {
        h3 {
          color: #1c9e84;
        }
      }
    }
  }
  
  .card-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    
    h4 {
      width: 50%;
      font-size: 1.1rem;
    }
    
    h2 {
      font-weight: 600;
    }
  }
`;