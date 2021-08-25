import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGif from "./CardGif";

const DisplayGifs = ({ gifs }) => {
  return (
    <Container >
      <Row >
        {gifs.map((gif) => {
          return (
            <Col sm={12} md={6} lg={4} >
              <CardGif gif={gif} key={gif.id} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default DisplayGifs;
