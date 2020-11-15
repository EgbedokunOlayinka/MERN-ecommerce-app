import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword.trim()}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form inline onSubmit={submitHandler} className="search-form">
      <Form.Control
        type="text"
        name="search-box"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5 search-box"
        placeholder="Search Products..."
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-success"
        className="p-2 search-btn"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
