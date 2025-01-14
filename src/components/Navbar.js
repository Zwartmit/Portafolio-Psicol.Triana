import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaTimes } from "react-icons/fa";
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
  position: absolute;
  top: 97px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%; 
  border-radius: 10px;
  background: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(9, 9, 121, 1) 48%, rgba(0, 93, 255, 1) 100%);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  padding: 8px;
  z-index: 9; 
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

  a {
    display: flex;
    align-items: center;
    margin: 0 10px;
    text-decoration: none;
    font-size: 18px;
    color: white;

    &:hover {
      color: #7fc2c1;
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavbarContainer>
      <LogoContainer>
        <a href="/">
          <img src={icon} alt="logo" />
        </a>
        <TextContainer>
          <h1>Cesar Augusto Triana Mariño</h1>
          <h2>Psicólogo profesional</h2>
        </TextContainer>
      </LogoContainer>

      <Links>
        <Link to="/">
          <FaHome /> Inicio
        </Link>
        <Link to="/about">
          <FaUser /> Sobre mí
        </Link>
        <Link to="/services">
          <FaBriefcase /> Servicios
        </Link>
      </Links>

      <Hamburger onClick={() => setMenuOpen(true)}>
        <div />
        <div />
        <div />
      </Hamburger>

      {menuOpen && (
        <DropdownMenu ref={dropdownRef} isOpen={menuOpen}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <FaHome /> Inicio
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <FaUser /> Sobre mí
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            <FaBriefcase /> Servicios
          </Link>
        </DropdownMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
