import styled from "styled-components";

const Portal = () => {
  return <>
  Portal
  <Theme>12341</Theme>
  </>;
};

const Theme = styled.div`
color: ${props => props.theme.color};
`

export default Portal;
