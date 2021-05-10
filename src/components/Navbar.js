import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./button";
import styled from "styled-components";
import LoginScreen from "./screens/loginScreen";
import SignupUserScreen from "./screens/RegisterUserScreen";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="./">
          <img src={logo} alt="Home" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Home
            </Link>{" "}
          </li>
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link">
              Products
            </Link>{" "}
          </li>
          <li className="nav-item ml-5">
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>{" "}
          </li>
        </ul>
        <Link to="./cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My cart
          </ButtonContainer>
        </Link>
        <Link to="/login" className="nav-link">
          <ButtonContainer>LOG IN</ButtonContainer>
        </Link>
        <Link to="/register"className="nav-link">
          <ButtonContainer>SIGN UP</ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;