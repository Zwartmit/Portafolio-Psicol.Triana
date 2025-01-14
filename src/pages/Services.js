import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import oriem from "../assets/oriem.png";
import psico from "../assets/psico.png";
import difem from "../assets/difem.png";
import difcog from "../assets/difcog.png";
import psiclin from "../assets/psiclin.png";

const ServicesSection = styled.section`
  padding: 5px 20px;
  text-align: center;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #04043c;
    text-shadow: 2px 2px 3px rgb(255, 255, 255);
  }
    
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const SliderWrapper = styled.div`
  width: 93%;
  margin: 0 auto;
  text-shadow: 2px 2px 3px rgb(0, 0, 0);
`;

const ServiceCard = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 9, 121, 1) 48%,
    rgba(0, 93, 255, 1) 100%
  );
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  img {
    justify-content: left;
    filter: drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0px 5px 8px rgb(0, 0, 0));
    border-radius: 30px;
  }

  h3 {
    color: rgb(255, 255, 255);
    font-size: 22px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #b0b1b5;
    text-align: center;
  }
`;

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  dots: true,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const Services = () => {
  return (
    <ServicesSection>
      <h2>Servicios</h2>
      <SliderWrapper>
        <Slider {...settings}>
          <ServiceCard>
            <img
              src={oriem}
              alt="logo"
              style={{ height: "150px", width: "100%", paddingBottom: "30px" }}
            />
            <h3>Orientación emocional</h3>
            <p>
              Te ayudo a gestionar tus emociones, fortalecer tu autoestima y
              desarrollar habilidades de afrontamiento para enfrentar los
              desafíos diarios.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img
              src={psico}
              alt="logo"
              style={{ height: "150px", width: "100%", paddingBottom: "30px" }}
            />
            <h3>Problemas con el consumo de sustancias psicoactivas</h3>
            <p>
              Te ofrezco apoyo especializado para identificar, comprender y
              superar patrones de consumo, enfocándome en tu recuperación y
              reintegración saludable.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img
              src={difem}
              alt="logo"
              style={{ height: "150px", width: "100%", paddingBottom: "30px" }}
            />
            <h3>Dificultades a nivel emocional</h3>
            <p>
              Te ayudo a manejar situaciones como la ansiedad, el estrés y la
              depresión, proporcionándote estrategias personalizadas para
              mejorar tu bienestar emocional.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img
              src={difcog}
              alt="logo"
              style={{ height: "150px", width: "100%", paddingBottom: "30px" }}
            />
            <h3>Dificultades a nivel cognitivo</h3>
            <p>
              Te apoyo en el desarrollo y la recuperación de habilidades
              cognitivas como la memoria, la atención y el razonamiento,
              adaptándome a tus necesidades individuales.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img
              src={psiclin}
              alt="logo"
              style={{ height: "150px", width: "100%", paddingBottom: "30px" }}
            />
            <h3>Psicología clínica</h3>
            <p>
              Abordo tus problemáticas psicológicas desde una perspectiva
              integral, proporcionándote diagnóstico, tratamiento y seguimiento
              especializado para mejorar tu calidad de vida.
            </p>
          </ServiceCard>
        </Slider>
      </SliderWrapper>
    </ServicesSection>
  );
};

export default Services;
