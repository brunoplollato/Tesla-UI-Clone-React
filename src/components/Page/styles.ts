import styled from 'styled-components';

export const Container = styled.div`
  .colored {
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(1) {
    background-image: url("ms-homepage-desktop.jpeg");
  }
  .colored:nth-child(2) {
    background-image: url("Desktop-ModelY.jpeg");
  }
  .colored:nth-child(3) {
    background-image: url("m3-homepage-desktop.jpeg");
  }
  .colored:nth-child(4) {
    background-image: url("mx-homepage-desktop.jpeg");
  }
  .colored:nth-child(5) {
    background-image: url("Desktop-SolarPanels.jpeg");
  }
  .colored:nth-child(6) {
    background-image: url("solar-roof-hero-desktop.jpeg");
  }
  .colored:nth-child(7) {
    background-image: url("Desktop-Accessories.jpeg");
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`;