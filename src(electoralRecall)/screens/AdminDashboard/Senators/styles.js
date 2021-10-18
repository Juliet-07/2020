import styled from 'styled-components'

export const AdminSenatorsWrap = styled('div')`
  section.top-layer {
    display: flex;
    justify-content: space-between;
    
    .cta {
      display: flex;
      align-items: center;
     
      .exports {
        margin-left: 1rem;
      }
    }
    
    @media screen and (max-width: 824px) {
      flex-wrap: wrap;
      
      .cta {
        margin-top: 1rem;
      }
    }
  }
  
  .action_btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    svg {
      font-size: 1rem;
      color: #269287;
    }
  }
`;