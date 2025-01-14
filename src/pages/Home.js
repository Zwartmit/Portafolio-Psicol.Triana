import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  text-align: center;
  padding: 35px 20px;

  h1 {
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
  }
`;

const Home = () => {
  return (
    <Hero>
      <h1>¡Que tu salud mental siempre sea prioridad!</h1>
    </Hero>
  );
};

export default Home;
