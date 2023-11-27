import React from 'react';
// import styled from 'styled-components';
import FooterContainer from './FooterContainer';

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2023 My Website</p>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;