import styled from 'styled-components';
export const Container =  styled.div`
  & label > span{ 
    margin-left: 10px;
    font-size: 13px;
  }
  `;
  export const CheckBoxHidden = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  border-color: ${({theme}) =>theme.tertiary};
  clip: rect(0 0 0 0);
  clip: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const Icon = styled.svg`
  fill: none;
  stroke: ${({theme}) =>theme.tertiary};
  stroke-width: 2px;
`;

export const CheckBoxVisible = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ${({theme}) =>theme.tertiary};;
  border-radius: 3px;
  transition: all 150ms;
 
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;



export const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const CheckBox = ({className, checked, ...props}) => (
  <Wrapper className={className}>
    <CheckBoxHidden checked={checked} {...props}/>
    <CheckBoxVisible checked={checked}>
    <Icon viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </Icon>
    </CheckBoxVisible>
  </Wrapper>
);

export default CheckBox;