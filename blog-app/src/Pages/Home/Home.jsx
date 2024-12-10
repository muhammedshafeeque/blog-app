import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import BlogAutoCompleat from "../../Components/BlogAutoComplet/BlogAutoCompleat";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Constants/Routes";
import axios from "../../Interceptor/Axios";
const initialPosts = [];

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);
  const navigate = useNavigate();
  const handleSearch = async (event) => {
    let { data } = await axios.get("/blog/blogs");
    setPosts(data.results);
  };
  const selectItem = (e) => {
    setPosts([e]);
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <Container className="my-4">
      <BlogAutoCompleat onItemSelect={selectItem} />

      <Row className="mt-4">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {
              navigate(ROUTES.CREATE_BLOG);
            }}
          >
            Create New
          </Button>
        </div>
      </Row>
      <Row>
        {posts.length === 0 ? (
          <Col>
            <div className="text-center text-muted">No posts found</div>
          </Col>
        ) : (
          posts.map((post) => (
            <Col md={12} key={post._id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div className="d-flex justify-content-between">
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </Card.Subtitle>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Home;
