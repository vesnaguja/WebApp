import { Form, FormControl } from "react-bootstrap";

const Search = ({ onKeyDown }) => {
  return (
    <Form className="d-flex container">
      <FormControl type="search" placeholder="Search" className="my-2" aria-label="Search" onKeyDown={onKeyDown} />
    </Form>
  );
};

export default Search;
