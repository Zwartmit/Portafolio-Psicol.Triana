import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../assets/icon.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(9, 9, 121, 1) 48%, rgba(0, 93, 255, 1) 100%);
  color: white;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 120%;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 0px 13px rgb(0, 0, 0), 0px 0px 13px #000000;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 80px;
    width: 80px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    margin: 0 6px;
    text-decoration: none;
    background-color: #7fc2c1;
    padding: 5px 15px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 0px 13px rgb(25, 200, 197), 0px 0px 13px #7fc2c1, 0px 0px 13px #000000;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 100%;
  right: 0;
  width: 30%;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
    margin: 10px 0;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={icon} alt="logo" />
      </LogoContainer>

      <Links>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </Links>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </Hamburger>

      <DropdownMenu isOpen={menuOpen}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>Sobre mí</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Servicios</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
