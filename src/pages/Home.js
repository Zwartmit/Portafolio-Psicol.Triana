import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  text-align: center;
  padding: 30px 20px;
  font-size: 20px;
`;

const Home = () => {
  return (
    <Hero>
      <h1>Bienvenido, bienvenida...</h1>
      <p>¡Que tu salud mental siempre sea prioridad!</p>
    </Hero>
  );
};

export default Home;
