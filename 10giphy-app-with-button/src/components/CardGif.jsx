import { Card } from "react-bootstrap";

const CardGif = ({ gif }) => {
  return (
    <Card className="card p-3 bg-light my-3">
      <Card.Img src={gif.images.original.url} />
    </Card>    
  );
};

export default CardGif;
