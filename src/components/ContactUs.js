import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyItem: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Form>
        <h1 className="display-4">Contact Us</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridContacNo">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control type="tel" placeholder="Enter Your mobile number" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
