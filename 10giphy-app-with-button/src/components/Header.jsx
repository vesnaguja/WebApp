import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="primary" fixed="top">
        <Container>
          <Navbar.Brand href="#">Giphy App</Navbar.Brand>
        </Container>
      </Navbar>     
    </Container>
  );
};

export default Header;
