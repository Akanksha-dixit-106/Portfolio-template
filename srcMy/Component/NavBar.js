import logo from "../logo.svg";
import { Container, NavDropdown, Navbar, Button, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";


export default function NavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width={30}
            height={30}
            className="d-inline-block align-top"
          />{" "}
          Brand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home">Education</Nav.Link>
            <Nav.Link href="#home">Experiance</Nav.Link>
            <NavDropdown title="Projects" id="basic-navbar-dropdown">
              <NavDropdown.Item href="#action/3.1">
                E-commerce App
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blogging App
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">PortFolio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
