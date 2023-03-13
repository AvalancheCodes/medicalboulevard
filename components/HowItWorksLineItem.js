import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";

const HowItWorksLineItem = ({number, title, text, className}) => {
  // Render markup
  return (
    <Container className={className}>
      <Row>
        <Col xs={"auto"}>
          <h3>
            <Badge pill bg='primary' className="font-monospace">{number.toString()}</Badge>
          </h3>
        </Col>
        <Col>
          <h3>{title}</h3>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default HowItWorksLineItem
