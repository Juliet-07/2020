import React from "react";
import {FlexibleDiv} from "../../../components/Box/styles";
import {LeadersQuoteWrapper} from "./styled";
import NelsonMandela from '../../../assets/images/nelson-mandela.jpg'
import DesmondTutu from '../../../assets/images/desmond-tutu.jpg'
import {H3} from "../../../components/FontSize/styles";

const LeadersQuote = () => (
  <LeadersQuoteWrapper>
    <FlexibleDiv className="main">
      <FlexibleDiv flexDir="column" className="section green left">
        <div className={"image__wrap"}>
          <img src={NelsonMandela} alt="Nelson Mandela"/>
        </div>
        <FlexibleDiv
          className="content"
          width="60%"
          alignItems={'center'}
          justifyContent="center"
        >
          <H3>
            To be free is not merely to cast off one's chains, but to live in a way that respects and enhances the
            freedom of others

          </H3>
          <p>
            Nelson Mandela
          </p>
        </FlexibleDiv>
      </FlexibleDiv>
      <FlexibleDiv flexDir="column" className="section green">
        <div className={"image__wrap"}>
          <img src={DesmondTutu} alt="Desmond Tutu"/>
        </div>
        <FlexibleDiv
          className="content"
          width="60%"
          alignItems={'center'}
          justifyContent="center"
        >
          <H3>
            If you're neutral in situations of injustice, you have chosen the side of the oppressor
          </H3>
          <p>
            Desmond Tutu
          </p>
        </FlexibleDiv>
      </FlexibleDiv>
    </FlexibleDiv>
  </LeadersQuoteWrapper>
);

export default LeadersQuote;
