import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    font-family: 'Segoe UI', sans-serif;
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url(${backgroundImage}) center/cover no-repeat;

  @media (max-width: 480px) {
    height: auto;
    min-height: 100vh;
    padding: 1rem;
    background-position: center top;
  }
`;