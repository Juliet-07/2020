import React from 'react';
import {TakeAStandWrap} from "./styles";
import {H2, H4, P} from "../../../components/FontSize/styles";

const TakeAStand = () => {
  return (
    <TakeAStandWrap>
      <div className="overlay" />

      <section className="take-stand">
        <H2 className={"title"}>TAKING A STAND AGAINST BAD LEADERSHIP</H2>

        <aside className="take-stand__content">
          <H4>Nigeria has been hobbled by a leadership problem</H4>

          <P>
            As a people, NOW is the time we exercise our right & say <strong>"NO MORE"</strong>
          </P>

          <P>
            <strong>NO MORE</strong> to bad leadership
          </P>

          <P>
            <strong>NO MORE</strong> to being slaves when we were born free
          </P>

          <P>
            <strong>NO MORE</strong> to the few taking the many for granted
          </P>
        </aside>
      </section>
    </TakeAStandWrap>
  );
};

export default TakeAStand;
