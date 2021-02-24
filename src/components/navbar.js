import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";
import logo from "../Images/Logo3dreamer.png";
import { Link } from "react-scroll";

function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img src={logo} className="img img-fluid" alt="" />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            href="#contact-us"
            to="contact-us"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Consultas
          </Link>

          <Link
            href="#products"
            to="products"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Productos
          </Link>

          <Link
            href="#services"
            to="services"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Servicios
          </Link>

          <Link
            href="#about-us"
            to="about-us"
            activeClass="active"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Nosotros
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
