/*
 * component: Footer
 * author: Favour George
 * Date: April 13, 2020
 */

import React from "react";
import { FooterStyles } from "./footer.styled";
import { BsArrowRight } from 'react-icons/bs';
import Button from "../Button";
import Divider from "../Dividers/index.component";
import ElectoralRecallLogo from '../../assets/images/electoral-recall-logo.png'
import Input from "../Inputs/Inputs.component";

const Footer = () => {
  return (
    <FooterStyles>
      <section className="middle-layer">
        <div className="col-4 logo-holder">
          <img src={ElectoralRecallLogo} alt="Electoral recall" />
        </div>
        <div className="col-4">
          <h6>Contacts Information</h6>
          <ul>
            <a href="">
              <li>Address Line 1</li>
            </a>
            <a href="">
              <li>Address Line 2</li>
            </a>
            <a href="">
              <li>Email: info@electoralrecall.ng</li>
            </a>
            <a href="">
              <li>Tel: (234) 000 000 0000</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h6>On Social Networks</h6>
          <ul>
            <a href="">
              <li>Facebook</li>
            </a>
            <a href="">
              <li>Twitter</li>
            </a>
            <a href="">
              <li>Instagram</li>
            </a>
            <a href="">
              <li>Linkedin</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h6>Subscribe Newsletter</h6>

          <aside>
            {/*<Input*/}
            {/*  label={"Email"}*/}
            {/*    inputName={"email"}*/}
            {/*/>*/}
            <Button
              type={"submit"}
              variant={"secondary"}
              click={() => {
              }}
              text={"Subscribe"}
            />
          </aside>
        </div>
      </section>

      <Divider
        width={"80%"}
      />

      <section className="bottom-banner">
        <aside>
          <ul>
            <a href="/privacy-policy">
              <li>
                Privacy Policy
              </li>
            </a>
            <a href="/terms-and-conditions">
              <li>Terms & Conditions</li>
            </a>
            <a href="/cookies-policy">
              <li>Cookies Policy</li>
            </a>
          </ul>
        </aside>
        <aside>
          &copy; {new Date().getFullYear()} | ElectoralRecall is proudly powered by {" "}
          <span>
            <a href='https://learnfactory.com.ng' target='_blank'>LearnFactory Nigeria</a>
          </span>
        </aside>
      </section>
    </FooterStyles>
  );
};

export default Footer;
