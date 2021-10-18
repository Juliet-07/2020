/*
 * component: CustomScrollingCards
 * author: George Favour 
 * Date: April 16th, 2020
 * EmBED CustomScrollingCards component
 */

import React, { useState, useEffect } from "react";
import { ScrollingContainer } from "./scrollingCard.styled";
import { FlexibleDiv } from "../Box/styles";
import {
  TiChevronLeft as LeftIcon,
  TiChevronRight as RightIcon,
} from "react-icons/ti";
import PropTypes from "prop-types";

const ScrollingDiv = ({
  children,
  autoScroll = true,
  scrollOuterBg,
  scrollInnerWidth,
  scrollInnerPad,
  scrollCardWidth,
  scrollCardHeight,
  scrollCardBg,
  scrollArrowBg,
  scrollArrowCol,
  scrollCardGaps,
}) => {
  const cards = React.createRef();

  const [callScroll, setCallScroll] = useState(true);
  const [scrollLeftValue, setScrollLeftValue] = useState(null);
  const [scrollLeftMaxValue, setScrollLeftMaxtValue] = useState(null);

  const handleScroll = (direction) => {
    direction === "left" &&
      (cards.current.scrollLeft -= cards.current.clientWidth);
    direction === "right" &&
      (cards.current.scrollLeft += cards.current.clientWidth);

    setScrollLeftValue(cards.current.scrollLeft);
    setScrollLeftMaxtValue(
      cards.current.scrollWidth - cards.current.offsetWidth
    );
  };

  const handlePlainScroll = () => {
    try {
      const { scrollLeft } = cards.current;

      setScrollLeftValue(scrollLeft);
      setScrollLeftMaxtValue(
        cards.current.scrollWidth - cards.current.offsetWidth
      );
    } catch (err) { }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePlainScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePlainScroll);
  });

  const mouseEvent = (event) => {
    event === "enter" && setCallScroll(false);
    event === "leave" && setCallScroll(true);
  };

  autoScroll &&
    callScroll &&
    setInterval(() => {
      try {
        const { scrollLeft } = cards.current;

        setScrollLeftValue(scrollLeft);
        setScrollLeftMaxtValue(
          cards.current.scrollWidth - cards.current.offsetWidth
        );

        cards.current.scrollWidth - cards.current.offsetWidth === scrollLeft
          ? (cards.current.scrollLeft = 0)
          : (cards.current.scrollLeft += cards.current.clientWidth);
      } catch (err) { }
    }, 1000);

  return (
    <ScrollingContainer
      scrollOuterBg={scrollOuterBg}
      scrollInnerWidth={scrollInnerWidth}
      scrollInnerPad={scrollInnerPad}
      scrollCardWidth={scrollCardWidth}
      scrollCardHeight={scrollCardHeight}
      scrollCardBg={scrollCardBg}
      scrollCardGaps={scrollCardGaps}
      scrollArrowBg={scrollArrowBg}
      scrollArrowCol={scrollArrowCol}
      onMouseEnter={() => mouseEvent("enter")}
      onMouseLeave={() => mouseEvent("leave")}
    >
      <div className="main">
        <div className="cardsContainer" ref={cards}>
          {/* takes already prepared cards */}
          {children}
        </div>
      </div>

      {scrollLeftValue !== 0 && (
        <FlexibleDiv className="scrollMoreMain_left">
          <FlexibleDiv onClick={() => handleScroll("left")}>
            <LeftIcon />
          </FlexibleDiv>
        </FlexibleDiv>
      )}

      {!(scrollLeftMaxValue === scrollLeftValue) && (
        <FlexibleDiv className="scrollMoreMain_right">
          <FlexibleDiv onClick={() => handleScroll("right")}>
            <RightIcon />
          </FlexibleDiv>
        </FlexibleDiv>
      )}
    </ScrollingContainer>
  );
};

ScrollingDiv.propTypes = {
  autoScroll: PropTypes.bool,
};

export default ScrollingDiv;
