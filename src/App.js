import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import Pictures from "./pages/Pictures";
import Works from "./pages/Works";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="/">
            <img
              alt="logo"
              src="/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Blitz Audio
          </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/services">Services</Nav.Link>
                  <Nav.Link href="/works">Works</Nav.Link>
                  <Nav.Link href="/pictures">Pictures</Nav.Link>
                  <Nav.Link href="/artist">Artist</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main className="main-content">
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/works" element={<Works />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/pictures" element={<Pictures />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
