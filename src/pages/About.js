import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 30px 20px;
  text-align: center;
`;

const Bio = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Bio>
        <h2>Sobre mí</h2>
        <p>
          Soy un psicólogo con más de 10 años de experiencia ayudando a las 
          personas a superar desafíos emocionales y alcanzar el bienestar.
          Mi enfoque combina técnicas modernas con una comprensión profunda de cada individuo.
        </p>
        <p>
          Mi misión es proporcionar un espacio seguro y de confianza para 
          explorar tus pensamientos, emociones y metas.
        </p>
      </Bio>
    </AboutSection>
  );
};

export default About;
