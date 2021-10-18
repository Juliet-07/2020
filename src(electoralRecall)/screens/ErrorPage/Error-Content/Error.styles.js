import styled from 'styled-components';

export const ErrorContainer = styled('div')`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;


.ErrorBox{
 width:60%;
 height:60%;
 justify-content:space-between;
 flex-direction:column;
 align-items:center;


 .ErrorIcon{
  width:100%;
  height:70%;
  margin-bottom:2rem;
  }
  .ErrorTextContainer{
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;

  .text{
    font-size:15px;
    font-weight:500;
    text-align:center;
    padding:0 4rem 1rem 4rem;
  }
  }
}


@media (max-width: 900px) {

  .ErrorBox{
   width:90%;

   .ErrorIcon{
    width:100%;
    height:70%;
    margin-bottom:0;
    }
    .ErrorTextContainer{
  
    .text{
      font-size:13px;
      padding:2rem 0.2rem 0.5rem 0.2rem;
    }
    }
  }
}

@media (max-width: 600px) {

  .ErrorBox{
   width:90%;

   .ErrorIcon{
    width:100%;
    height:70%;
    margin-bottom:0;
    }
    .ErrorTextContainer{
  
    .text{
      font-size:13px;
      padding:0.3rem 0 0.5rem 0;
    }
    }
  }
}

`