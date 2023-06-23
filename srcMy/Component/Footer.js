import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
      <footer>
        <Container className="mt-5">
          <Row>
            <Col className={4}>Contact Us</Col>
            <Col className={4}>Another link</Col>
            <Col className={4}>Come onboard</Col>
            <Col className={3}>
                <div>Follow us</div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}