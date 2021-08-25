import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGif from "./CardGif";

const DisplayGifs = ({ gifs }) => {
  return (
    <Container>
      <Row>
        {gifs.map((gif) => {
          return (
            <Col>
              <CardGif gif={gif} key={gif.id} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default DisplayGifs;
