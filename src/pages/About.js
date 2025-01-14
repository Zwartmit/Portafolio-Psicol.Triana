import React from "react";
import styled from "styled-components";
import cesar from "../assets/cesar.jpg";
import Slider from "react-slick";
import actividad1 from "../assets/actividad1.jpg";
import actividad2 from "../assets/actividad2.jpg";
import actividad3 from "../assets/actividad3.jpg";
import actividad4 from "../assets/actividad4.jpg";
import actividad5 from "../assets/actividad5.jpg";
import actividad6 from "../assets/actividad6.jpg";
import actividad7 from "../assets/actividad7.jpg";
import actividad8 from "../assets/actividad8.jpg";
import actividad9 from "../assets/actividad9.jpg";
import actividad10 from "../assets/actividad10.jpg";
import actividad11 from "../assets/actividad11.jpg";
import actividad12 from "../assets/actividad12.jpg";
import actividad13 from "../assets/actividad13.jpg";
import actividad14 from "../assets/actividad14.jpg";
import actividad15 from "../assets/actividad15.jpg";

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

const CarouselWrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 100%;
  max-width: 700px;

  @media (max-width: 768px) {
  width: 93%;
  max-width: 500px;
  }

  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  max-width: 700px;
  height: 350px;
  margin-bottom: 20px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    height: 250px;
    margin-bottom: 20px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const About = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <AboutSection>
      <Title>Sobre mí</Title>
      <Card>
        <Paragraph style={{ fontWeight: "bold", color: "#ffffff" }}>
          Hola, Soy César Augusto Triana Marino...
        </Paragraph>
        <ContentWrapper>
          <Image src={cesar} alt="Cesar Augusto Triana Marino" />
          <div>
            <Paragraph>
              Soy psicólogo egresado de la Universidad Sergio Arboleda, especializado en psicología social-comunitaria con enfoque sistémico.
              He trabajado en la implementación de políticas públicas de salud mental, así como en la atención a víctimas de violencia y problemas
              asociados al consumo de sustancias psicoactivas, tanto en roles públicos como en la práctica clínica independiente.
            </Paragraph>
          </div>
        </ContentWrapper>
        <Paragraph>
          Cuento con experiencia en terapias cognitivo-conductuales, investigación y trabajo social, promoviendo cambios positivos y duraderos.
          Me destaco por mi comunicación efectiva, ética profesional, capacidad de escucha y trabajo en equipos interdisciplinarios, siempre enfocados
          en ofrecer soluciones integrales adaptadas a cada situación.
        </Paragraph>
        <Paragraph
          style={{ fontWeight: "bold", color: "#ffffff", marginTop: "40px" }}
        >
          Mi experiencia...
        </Paragraph>
        <Paragraph>
          En 2022, formé parte de la Comisaría de Familia y la Secretaría de Desarrollo Social, contribuyendo en la implementación de la política pública
          municipal de salud mental en Monterrey, Casanare. En 2023, trabajé como profesional de salud pública en el área de salud mental, brindando seguimiento
          a víctimas de violencia y a personas con problemas asociados al consumo de sustancias psicoactivas. En 2024, continué con este trabajo hasta agosto,
          para luego desempeñarme como psicólogo clínico independiente.
        </Paragraph>
        <CarouselWrapper>
        <Slider {...carouselSettings}>
          {[actividad1, actividad2, actividad3, actividad4, actividad5, actividad6, actividad7, actividad8, actividad9, actividad10, actividad11, actividad12, actividad13, actividad14, actividad15].map((imgSrc, index) => (
            <div key={index}>
              <CarouselImage src={imgSrc} alt={`Actividad ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </CarouselWrapper>
      </Card>
    </AboutSection>
  );
};

export default About;
