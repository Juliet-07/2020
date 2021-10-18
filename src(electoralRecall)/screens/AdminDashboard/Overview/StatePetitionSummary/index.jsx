import React from 'react';
import {StatePetitionSummaryWrap} from "./style";
import CustomTable from "../../../../components/Table";
import {STATE_PETITION_SUMMARY_TABLE_BODY, STATE_PETITION_SUMMARY_TABLE_HEAD} from "./state-petition-summary-data";
import {H3} from "../../../../components/FontSize/styles";

const StatePetitionSummary = () => {
  return (
    <StatePetitionSummaryWrap>
      <H3>State Petition Summary</H3>
      <CustomTable
        tableHead={STATE_PETITION_SUMMARY_TABLE_HEAD}
        tableBody={STATE_PETITION_SUMMARY_TABLE_BODY}

        theadBkColor={"#E4E4E4"}
        theadColor={"#146D3C"}
        rowClick={() => {
        }}
        bottomGap="4px"
        pageSize={5}
        paginator
        prevNext
      />
    </StatePetitionSummaryWrap>
  );
};

export default StatePetitionSummary;
