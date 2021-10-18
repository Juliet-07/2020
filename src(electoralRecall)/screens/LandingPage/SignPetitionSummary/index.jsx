import React from 'react';
import {SignPetitionSummaryWrap} from "./styles";
import {H3, H4} from "../../../components/FontSize/styles";
import {GeoLocation} from "./sign-petition-data";
import Link from "next/link";

const SignPetitionSummary = () => {
  return (
    <SignPetitionSummaryWrap>
      <section className="info">
        <H3 color={"#F9F9F9"}>SIGN THE PETITION AGAINST BAD GOVERNANCE</H3>
        <H4 color={"#F9F9F9"}>SIGN TO RECALL SENATORS & HOUSE OF REPRESENTATIVE MEMBERS</H4>
      </section>

      <section className="geolocation">
        {GeoLocation.map(data => (
          <Link href={`/recall?qs=${data.query}`}>
            <a>
              <h3>{data.query.toUpperCase()}</h3>
              <h5>{data.text}</h5>
            </a>
          </Link>
        ))}
      </section>
    </SignPetitionSummaryWrap>
  );
};

export default SignPetitionSummary;
