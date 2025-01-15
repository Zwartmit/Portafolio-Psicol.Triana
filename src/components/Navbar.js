import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import icon from "../assets/icon.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(9, 9, 121, 1) 48%, rgba(0, 93, 255, 1) 100%);
  height: 75px;
  color: white;
  font-weight: bold;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 0px 13px rgb(0, 0, 0), 0px 0px 13px #000000;
  position: relative;
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 80px;
    width: 80px;
  }
`;

const TextContainer = styled.div`
  margin-left: 10px;
  color: white;
  text-shadow: 2px 2px 3px rgb(0, 0, 0);

  h1 {
    font-size: 23px;
    margin: 0;
    color: #83c4c3;
  }

  h2 {
    font-size: 18px;
    margin: 0;
    font-weight: normal;
    color: #b0b1b5;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    margin: 0 10px;
    text-decoration: none;
    background-color: #7fc2c1;
    padding: 5px 15px;
    border-radius: 25px;
    color: rgb(0, 0, 0);
    font-size: 18px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.75);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 25px;
    height: 20px;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
  }
`;

const DropdownMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(0, 0, 0, 0.97), rgba(9, 9, 121, 0.9));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: ${({ isOpen }) => (isOpen ? "circle(125%)" : "circle(0%)")};
  animation: ${({ isOpen }) =>
    isOpen ? "circle-in-center 2.5s cubic-bezier(0.25, 1, 0.30, 1) both" : "none"};
  transition: clip-path 0.8s ease-in-out;
  z-index: 10;

  a {
    margin: 15px 0;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: white;

    &:hover {
      color: #7fc2c1;
    }
  }

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 45px;
    color: white;
    cursor: pointer;
  }

  @keyframes circle-in-center {
    from {
      clip-path: circle(0%);
    }
    to {
      clip-path: circle(125%);
    }
  }
`;


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <LogoContainer>
        <a href="/">
          <img src={icon} alt="logo" />
        </a>
        <TextContainer>
          <h1>César Augusto Triana Mariño</h1>
          <h2>Psicólogo profesional</h2>
        </TextContainer>
      </LogoContainer>

      <Links>
        <Link to="/">
          <FaHome /> Inicio
        </Link>
        <Link to="/sobre-mi">
          <FaUser /> Sobre mí
        </Link>
        <Link to="/servicios">
          <FaBriefcase /> Servicios
        </Link>
      </Links>

      <Hamburger onClick={() => setMenuOpen(true)}>
        <div />
        <div />
        <div />
      </Hamburger>

      <DropdownMenu isOpen={menuOpen}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          &times;
        </div>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <FaHome /> Inicio
        </Link>
        <Link to="/sobre-mi" onClick={() => setMenuOpen(false)}>
          <FaUser /> Sobre mí
        </Link>
        <Link to="/servicios" onClick={() => setMenuOpen(false)}>
          <FaBriefcase /> Servicios
        </Link>
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
