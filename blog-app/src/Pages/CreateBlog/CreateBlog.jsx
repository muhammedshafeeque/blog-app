import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios  from "../../Interceptor/Axios";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Constants/Routes";
const BlogCreation = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    tags: "",
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await  axios.post('/blog/blog',post)
    navigate(ROUTES.HOME)
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Create New Blog Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={post.content}
            onChange={handleChange}
            rows={6}
            placeholder="Write your blog content"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={post.author}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            name="tags"
            value={post.tags}
            onChange={handleChange}
            placeholder="Comma-separated tags"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>
    </Container>
  );
};

export default BlogCreation;
