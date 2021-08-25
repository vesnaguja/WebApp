import { Card } from "react-bootstrap";

const CardGif = ({ gif }) => {
  return (
    <Card className="card p-3 bg-secondary my-3">
      <Card.Img variant="top" src={gif.images.original.url} />
    </Card>    
  );
};

export default CardGif;
