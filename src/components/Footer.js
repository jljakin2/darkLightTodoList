import React from "react";
import styled from "styled-components";

const FooterText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.footerText};
  letter-spacing: -0.011875rem;
  /* border-top: */

  margin-bottom: 3.125rem;
`;

const Footer = ({ text }) => {
  return <FooterText>{text}</FooterText>;
};

export default Footer;
