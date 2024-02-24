import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Image } from 'react-bootstrap'; 
import customLogo from './asset/download.png';
import {
  MDBIcon
} from 'mdb-react-ui-kit';
const NavbarMain = () => {
  const languages = ['English', 'Spanish', 'French', 'German'];

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
          <Image src={customLogo} alt="Custom Logo" width="30" height="30" />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="MediaNews">Media News</Nav.Link>
            <Nav.Link href="Purchase">Purchase</Nav.Link>
            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />

          <DropdownButton variant="dark" title={<i className="bi bi-globe"></i>} id="languageDropdown">
            {languages.map((language, index) => (
              <Dropdown.Item key={index}>{language}</Dropdown.Item>
            ))}
          </DropdownButton>

          <Button variant="light" id="profileDropdown" className="me-2">
            <i className="bi bi-person"></i>
          </Button>

          <Button className='button'>Download</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavbarMain;
