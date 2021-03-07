import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../Images/Logo3dreamer_nav.png";
import { Link } from "react-scroll";

function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand
        href="https://www.instagram.com/3dreamer.inc/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={logo} className="img img-fluid" alt="" />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            href="#services"
            to="services"
            activeClass="active"
            className="nav-link content_a 600"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Servicios
          </Link>

          <Link
            href="#products"
            to="products"
            activeClass="active"
            className="nav-link content_a 600"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Productos
          </Link>

          <Link
            href="#about-us"
            to="about-us"
            activeClass="active"
            className="nav-link content_a 600"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Nosotros
          </Link>

          <Link
            href="#contact-us"
            to="contact-us"
            activeClass="active"
            className="nav-link content_a 600"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Consultas
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
