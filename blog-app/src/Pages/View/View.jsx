import React, { useState, useEffect } from "react";
import { Container, Card, Button, Badge } from "react-bootstrap";
import axios from "../../Interceptor/Axios";
import { useParams } from "react-router-dom";

const BlogView = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log("calling");
    axios.get(`blog/blog/${id}`).then((res) => {
      setPost(res.data);
    });
  });
  return (
    <Container className="mt-5">
      {post && (
        <Card>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h2>{post.title}</h2>
              <div>
                <span className="text-muted me-2">By {post.author}</span>
                <span className="text-muted">{post.date}</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ whiteSpace: "pre-wrap" }}>
              {post.content}
            </Card.Text>

            <div className="mt-3">
            <Badge bg="secondary" className="me-2" >
                  {post.tag}
                </Badge>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default BlogView;
