import React from "react";
import NavCartButton from "./NavCartButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import classes from "./TheNavbar.css";
import Logo from "../../assets/Logo/Logo.png";
import "./TheNavbar.css";
const TheNavbar = (props) => {
  //Layout and structure of the navbar to be passed to THENAV component
  return (
    <>
      <Navbar
        expand="xl"
        className="navbar fixed-top"
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className="navbar_brand">
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            <img className="imga" src={Logo} alt="My logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav__linkgroup ms-auto">
            <Nav.Link
              className="nav__link firstnav__link me-4"
            >
              <Link
                activeClass={classes.active}
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
              <Link
                activeClass={classes.active}
                to="why"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Why choose us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
              <Link
                activeClass={classes.active}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Our dishes
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
              <Link
                activeClass={classes.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav__link me-4">
              <Link
                activeClass={classes.active}
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Testimonials
              </Link>
            </Nav.Link>
            <Nav.Link href="#buttons" className="nav__link">
              <NavCartButton onClick={props.onShowCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
  //ENDS
};

export default TheNavbar;