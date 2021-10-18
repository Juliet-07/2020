import styled from "styled-components";

export const AcordionWrapper = styled('div')`
  width: ${({ width }) => (width ? width : "100%")};
  margin: 5em 0;  
  .panel {
    /* background-color: #fff; */
  }
  .panel__label {
    position: relative;
    display: block;
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 25px 0px;
    font-weight: 500;
    color: #333333;
    font-size: 14px;
    font-family: inherit;
    transition: color 0.2s linear;
    border-bottom: 1px solid #4f4f4f42;
    cursor: pointer;
  }
  .panel__label:hover::after {
    background-color: #444;
    transition: 0.5s linear;
  }
  .panel__label:hover::before {
    background-color: #444;
    transition: 0.5s linear;
  }
  .panel__label:focus {
    outline: none;
  }
  .panel__label::-moz-focus-inner {
    border: 0;
  }
  
  .panel__label:after,
  .panel__label:before {
    content: "";
    position: absolute;
    right: 25px;
    top: 50%;
    width: 14px;
    height: 2px;
    margin-top: -2px;
    background-color: #4f4f4f42;
  }
  .panel__label:before {
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .panel[aria-expanded="true"] .panel__content {
    opacity: 1;
  }
  .panel[aria-expanded="true"] .panel__label {
    color: ${({
      theme: {
        palette: { primary }
      }
    }) => primary.main};
  }
@media (max-width: 820px) {
  .panel[aria-expanded="true"] .panel__label  {
    width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
  }
  .panel__label:after,
  .panel__label:before{
  display: none
  }
}

  .panel[aria-expanded="true"] .panel__label:before {
    transform: rotate(0deg);
  }

  .panel[aria-expanded="true"] .panel__label:after {
    background-color: ${({
      theme: {
        palette: { primary }
      }
    }) => primary.main};
  }

  .panel__inner {
    overflow: hidden;
    will-change: height;
    transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .panel__content {
    margin: 20px 0px;
    font-size: 14px;
    color: #3a3d41;
    line-height: 26.8px;
    opacity: 0;
    animation: enter 1s forwards;
    transition: opacity 0.3s linear 0.18s;
  }

  @keyframes enter {
    0% {
      transform: translateY(-200px);
      display: block;
    }
    100% {
      transform: translateY(0px);
      display: block;
      opacity: 1;
    }
  }
  .panel:not(:last-child) {
    margin-top: 6px;
  }
`;
