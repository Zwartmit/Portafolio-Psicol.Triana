import React from "react";
import styled from "styled-components";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Hero = styled.section`
  text-align: center;
  padding: 5px 20px;
  color: #04043c;
  text-shadow: 2px 2px 3px rgb(255, 255, 255);

  h1 {
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const EmailButton = styled.a`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: #005afa;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const WhatsAppIcon = styled(FaWhatsapp)`
  color: white;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const EmailIcon = styled(FaEnvelope)`
  color: white;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Home = () => {
  return (
    <Hero>
      <h1>¡Que tu salud mental siempre sea prioridad!</h1>
      <WhatsAppButton
        href="https://wa.me/573209829434"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </WhatsAppButton>
      <EmailButton
        href="mailto:trianacesar013@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon />
      </EmailButton>
    </Hero>
  );
};

export default Home;
