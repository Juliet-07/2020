/*
 * component: Landing Header
 * author: Favour George
 * Date: April 14, 2020
 */

import React from 'react';
import { LandingHeaderBox } from "./landingHeader.styles";
import Button from "../../../components/Button";
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from "next/router";

const LandingHeader = () => {
  const router = useRouter();

  return (
    <LandingHeaderBox>
      <div className="overlay" />

      <section>
        <div className="info">
          <h3>Electoral Recall</h3>
          <h6>Online Voting System</h6>

          <p>
            The future of democracy is in the power of choice; this power belongs to the people and must be used by the people. Together we are the people who make the ultimate decision.
          </p>
        </div>

        <Button
          type={"button"}
          click={() => router.push('/sign-up')}
          icon={<BsArrowRight />}
          text={"Get Started"}
        />
      </section>
    </LandingHeaderBox>
  );
};

export default LandingHeader;