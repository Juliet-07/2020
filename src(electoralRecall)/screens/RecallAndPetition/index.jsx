import React from 'react';
import GeneralLayout from "../../components/Layout/GeneralLayout";
import {RecallAndPetitionWrap} from "./styles";
import {useRouter} from "next/router";
import {CONSTITUENCY_MATCHER} from "../../lib/constants";

const RecallAndPetition = () => {
  const router = useRouter();
  const {query} = router;
  const queryFilter = query.qs || 'all';
  const queriedStates = CONSTITUENCY_MATCHER[queryFilter]

  console.log(queriedStates, 'states to show')

  return (
    <GeneralLayout>
      <RecallAndPetitionWrap>
        <header>
          <div className="overlay" />

          <section>
            <h3>Recall Bad Performing Senators & House of Representative Members</h3>
          </section>
        </header>

        <main className={'display_pane'}>

        </main>
      </RecallAndPetitionWrap>
    </GeneralLayout>
  );
};

export default RecallAndPetition;
