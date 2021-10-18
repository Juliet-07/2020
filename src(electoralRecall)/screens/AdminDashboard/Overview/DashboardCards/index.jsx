import React from 'react';
import {DashboardCardWrap} from "./style";
import {dashboardCardData} from "./card-data";
import {H2, H4} from "../../../../components/FontSize/styles";
import {FlexibleDiv} from "../../../../components/Box/styles";

const DashboardCards = () => {
  return (
    <DashboardCardWrap>
      {!!dashboardCardData.length && dashboardCardData.map(cardData => (
        <FlexibleDiv
          justifyContent="space-evenly"
          alignItems="flex-start"
          className={'card-data__wrap'}
        >
          <aside
            className={'card-data'}
          >
            <H4>{cardData.text}</H4>
            <H2>{cardData.value}</H2>
          </aside>
        </FlexibleDiv>
      ))}
    </DashboardCardWrap>
  );
};

export default DashboardCards;
