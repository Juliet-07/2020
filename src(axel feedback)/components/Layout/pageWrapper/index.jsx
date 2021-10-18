import React from 'react';
import { PageWrapperStyles } from "./styles";

const PageWrapper=props=> {
  return (
    <PageWrapperStyles>
      {props.children}
    </PageWrapperStyles>
  );
}

export default PageWrapper