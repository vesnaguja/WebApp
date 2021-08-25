import { Card } from "react-bootstrap";

const CardGif = ({ gif }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={gif.images.original.url} />
    </Card>
  );
};

export default CardGif;
