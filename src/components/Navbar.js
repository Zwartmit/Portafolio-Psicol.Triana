import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../assets/icon.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: black;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 48%, rgba(0,93,255,1) 100%);
  font-weight: bold;
  font-family: sans-serif;
  font-size: 120%;
  font-style: oblique;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 0px 13px rgb(0, 0, 0), 0px 0px 13px rgb(0, 0, 0), 0px 0px 13px #000000;
`;

const Links = styled.div`
  a {
    margin: 0 6px;
    text-decoration: none;
    background-color: #7fc2c1;
    padding: 5px 15px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 0px 13px rgb(25, 200, 197), 0px 0px 13px #7fc2c1, 0px 0px 13px   #000000;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
      <img src={icon} alt="logo" style={{height: "90px", width: "90px"}}/>
      {/* <h1 style={{color: "white", fontSize: "13px", marginTop: "5px"}}>Cesar Triana</h1> */}
    </div>
      <Links>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/contact">Contacto</Link>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;
