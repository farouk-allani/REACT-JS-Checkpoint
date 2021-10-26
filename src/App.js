import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">GoMyCode</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">HackerSpaces</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
          </Navbar>

          <Image
            src="https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp"
            fluid
          />
            <center><h1 className="title" >Sign UP ! And Join GoMyCode Community</h1></center>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Country</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Tunisia</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Tunis</option>
                  <option>Sousse</option>
                  <option>Kairouan</option>
                  <option>Sfax</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
          <div className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2021 Copyrights reserved to GoMyCode company</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="#">Privacy</a></li>
      <li className="list-inline-item"><a href="#">Terms</a></li>
      <li className="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </div>
        </Container>
      </header>
    </div>
    
  );
}

export default App;
