/*
 * section: TextCarousel
 * author: Bernardine May Eze
 * Date: April 9, 2020
 * EmBED TextCarousel
 */

import React from "react";
import { TextCarouselWrap } from "./styled";
import { FlexibleDiv } from "../../../components/Box/styles";
import ScrollingDiv from "../../../components/Carousel";
import { generateID } from "../../../lib/generateID";

const TextCarousel = () => {
  const cardData = [
    {
      number: "01",
      year: "2020",
      quote:
        "  I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
      author: "Nelson Mandela"
    },
    {
      number: "02",
      year: "2020",
      quote:
        " The seeds of success in every nation on Earth are best planted in women and children.",
      author: "Joyce Banda"
    },
    {
      number: "03",
      year: "2020",
      quote:
        " Education is for improving the lives of others and for leaving your community and world better than you found it",
      author: "Marian Wright Edelman"
    },
    {
      number: "04",
      year: "2020",
      quote:
        "  I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
      author: "Nelson Mandela"
    }
  ];
  return (
    <>
      <ScrollingDiv
        scrollCardBg="#003333"
        scrollOuterBg="#003333"
        scrollArrowBg="#ffffff47"
        scrollArrowCol="#F4F5F7"
        // scrollCardHeight='100%'
        scrollCardGaps="0">
        {cardData.map((item, i) => (
          <TextCarouselWrap key={generateID(15)}>
            <FlexibleDiv
              className="container"
              alignItems="stretch"
              flexWrap="no-wrap">
              <div className="number">
                <FlexibleDiv>
                  <h1>{item.number}</h1>
                </FlexibleDiv>
                <h3>{item.year}</h3>
              </div>

              <FlexibleDiv
                className="content"
                flexDir="column"
                justifyContent="space-between">
                <p>{item.quote}</p>
                <h3 className="author">{item.author}</h3>
              </FlexibleDiv>
            </FlexibleDiv>
          </TextCarouselWrap>
        ))}
      </ScrollingDiv>
    </>
  );
};

export default TextCarousel;
