import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import axios from "../../Interceptor/Axios";

const BlogAutoCompleat = ({ onItemSelect }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      try {
        const response = await axios.get(`/blog/blogs?titleContains=${value}`);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleItemSelect = (item) => {
    onItemSelect(item);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div style={{ position: "relative" }}>
      <Form.Control
        value={searchTerm}
        type="text"
        placeholder="Scan barcode or enter item name"
        onChange={handleSearch}
        autoComplete="off"
      />
      {searchResults.length > 0 && (
        <ListGroup
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "1px",
            zIndex: 9999,
            maxHeight: "200px",
            overflowY: "auto",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {searchResults.map((item) => (
            <ListGroup.Item
              key={item._id}
              action
              onClick={() => handleItemSelect(item)}
            >
              {item.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default BlogAutoCompleat;
