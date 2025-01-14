import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  text-align: center;
  padding: 50px 20px;
  font-size: 20px;
`;

const Home = () => {
  return (
    <Hero>
      <h1>¡Que tu salud mental siempre sea prioridad!</h1>
    </Hero>
  );
};

export default Home;
