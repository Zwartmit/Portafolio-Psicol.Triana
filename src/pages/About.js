import React from "react";
import styled from "styled-components";
import cesar from "../assets/cesar.jpg";

const AboutSection = styled.section`
  padding: 5px 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const Card = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 9, 121, 1) 48%,
    rgba(0, 93, 255, 1) 100%
  );
  border-radius: 30px;
  box-shadow: 0px 4px 6px rgb(0, 0, 0);
  padding: 20px 30px;
  max-width: 800px;
  margin: 20px auto;
  text-align: justify;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  color: #04043c;
  text-shadow: 2px 2px 3px rgb(255, 255, 255);
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #b0b1b5;
  text-shadow: 2px 2px 3px rgb(0, 0, 0);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 250px;
  margin-right: 20px;
  border-radius: 100%;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Title>Sobre mí</Title>
      <Card>
        <Paragraph style={{ fontWeight: "bold", color: "#ffffff" }}>
          Hola, Soy Cesar Augusto Triana Marino...
        </Paragraph>
        <ContentWrapper>
          <Image src={cesar} alt="Cesar Augusto Triana Marino" />
          <div>
            <Paragraph>
              Soy psicólogo egresado de la Universidad Sergio Arboleda,
              especializado en psicología social-comunitaria con un enfoque
              sistémico. He trabajado en la implementación de políticas públicas
              de salud mental y en atención a víctimas de violencia y problemas
              asociados al consumo de sustancias psicoactivas, tanto en roles
              públicos como clínicos independientes.
            </Paragraph>
          </div>
        </ContentWrapper>
        <Paragraph>
          Cuento con experiencia en terapias cognitivo-conductuales,
          investigación y trabajo social, promoviendo cambios positivos y
          duraderos. Destaco por mi comunicación efectiva, ética profesional,
          capacidad de escucha y trabajo en equipos interdisciplinarios para
          ofrecer soluciones integrales adaptadas a cada situación.
        </Paragraph>
        <Paragraph
          style={{ fontWeight: "bold", color: "#ffffff", marginTop: "40px" }}
        >
          Mi experiencia...
        </Paragraph>
        <Paragraph>
          En 2022, formé parte de la comisaría de familia y la secretaría de
          desarrollo social, contribuyendo en la implementación de la política
          pública municipal de salud mental en Monterrey, Casanare. En 2023,
          trabajé como profesional de salud pública en el área de salud mental,
          brindando seguimiento a víctimas de violencia y a personas con
          problemas asociados al consumo de sustancias psicoactivas. En 2024,
          continué con este trabajo hasta agosto, y luego trabajé como psicólogo
          clínico independiente.
        </Paragraph>
      </Card>
    </AboutSection>
  );
};

export default About;
