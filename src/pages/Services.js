import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import oriem from "../assets/oriem.png";
import psico from "../assets/psico.png";
import difem from "../assets/difem.png";
import difcog from "../assets/difcog.png";
import psiclin from "../assets/psiclin.png";

const ServicesSection = styled.section`
  padding: 30px 20px;
  text-align: center;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #333;
  }
`;

const SliderWrapper = styled.div`
  width: 93%; 
  margin: 0 auto; 
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 25px;
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
  }

  h3 {
    color: #4caf50;
    font-size: 22px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #555;
    text-align: center;
  }
`;

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, },},
    { breakpoint: 600, settings: { slidesToShow: 1, },},
  ],
};

const Services = () => {
  return (
    <ServicesSection>
      <h2>Servicios</h2>
      <SliderWrapper>
        <Slider {...settings}>
          <ServiceCard>
            <img src={oriem} alt="logo" style={{height: "150px", width: "100%", paddingBottom: "30px"}}/>
            <h3>Orientación emocional</h3>
            <p>
              Brindamos herramientas para gestionar emociones, fortalecer la
              autoestima y desarrollar habilidades de afrontamiento frente a los
              desafíos diarios.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img src={psico} alt="logo" style={{height: "150px", width: "100%", paddingBottom: "30px"}}/>
            <h3>Problemas con el consumo de sustancias psicoactivas</h3>
            <p>
              Ofrecemos apoyo especializado para identificar, comprender y superar
              patrones de consumo, enfocándonos en la recuperación y la
              reintegración saludable.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img src={difem} alt="logo" style={{height: "150px", width: "100%", paddingBottom: "30px"}}/>
            <h3>Dificultades a nivel emocional</h3>
            <p>
              Ayudamos a manejar situaciones como la ansiedad, el estrés y la
              depresión, proporcionando estrategias personalizadas para mejorar el
              bienestar emocional.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img src={difcog} alt="logo" style={{height: "150px", width: "100%", paddingBottom: "30px"}}/>
            <h3>Dificultades a nivel cognitivo</h3>
            <p>
              Apoyamos el desarrollo y la recuperación de habilidades cognitivas
              como la memoria, la atención y el razonamiento, adaptándonos a las
              necesidades individuales.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img src={psiclin} alt="logo" style={{height: "150px", width: "100%", paddingBottom: "30px"}}/>
            <h3>Psicología clínica</h3>
            <p>
              Abordamos problemáticas psicológicas desde una perspectiva integral,
              proporcionando diagnóstico, tratamiento y seguimiento especializado
              para mejorar la calidad de vida.
            </p>
          </ServiceCard>
        </Slider>
      </SliderWrapper>
    </ServicesSection>
  );
};

export default Services;