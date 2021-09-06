import { useRef } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { getGifs } from "../services/giphyService";

const Search = ({ updateGifListHandler }) => {
  const searchBox = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const searchedString = searchBox.current.value.trim();
    getGifs(searchedString).then((res) => updateGifListHandler(res));
  };

  return (
    <Form className="d-flex container" onSubmit={submitHandler}>
      <FormControl type="search" placeholder="Search" className="my-2 me-2" aria-label="Search" ref={searchBox} />
      <Button variant="outline-primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
