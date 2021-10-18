/*
 * page: Home
 * author: Favour George
 * Date: April 9, 2020
 * EmBED homepage
 */

import React from "react";
import TakeAStand from "./TakeAStand";
import AfricaRising from "./AfricaRising";
import LeadersQuote from "./LeadersQuotes";
import LandingHeader from "./LandingHeader";
import TextCarousel from "./TextCarousel";
import Stats from "./Stats";
import {useQuery} from "@apollo/client";
import {LANDING_PAGE_STATS} from "../../lib/queries/landingPageStats.gql";
import {PageLoader} from "../../components/Loaders";
import {ToastMessage, type} from "../../components/ToastMessage";
import SignPetitionSummary from "./SignPetitionSummary";

const Landing = () => {
  // const {loading, error, data} = useQuery(LANDING_PAGE_STATS);
  //
  // if (loading) return <PageLoader />;
  // if (error) {
  //   ToastMessage(type.ERROR, error.message)
  // }

  return (
    <div>
      <LandingHeader />
      <AfricaRising />
      <LeadersQuote />
      <TakeAStand />
      <SignPetitionSummary />
      <Stats
        content={[
          { number: 500, label: "Registered Users", id: 1 },
          { number: 793, label: "Senators", id: 2 },
          { number: 200, label: "Legislators", id: 3 },
          { number: 500, label: "Petitions", id: 4 },
          // { number: data.getStudentsCount, label: "Students", id: 2 },
          // { number: data.countClass, label: "Classes", id: 3 },
          // { number: data.getTeachersCount, label: "Teachers", id: 4 },
        ]}
      />
    </div>
  );
};

export default Landing;
