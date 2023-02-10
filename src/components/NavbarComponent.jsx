import { useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  FormGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const [search, setSearch] = useState();

  const navigate = useNavigate();

  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="*">Weather report</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/*">
            <div className="nav-link">Home</div>
          </Link>
          <NavDropdown title="Favourites" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Not implemented wey
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form
          inline
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/${search}`);
          }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Link to={`/${search}`}>
            <Button variant="outline-success">Search</Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
