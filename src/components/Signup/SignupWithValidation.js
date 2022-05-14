import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { cityList } from "./cityOption";

const SignupWithValidation = () => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    tncAgreed: false,
  });
  const [formDataErrors, SetFormDataErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    tncAgreed: false,
  });

  const validate = (e) => {
    e.preventDefault();
    let { name, email, password, confirmPassword, gender, city, tncAgreed } =
      formData;

    if (name === "") {
      SetFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        name: "Name feild cannot be blank.",
      }));
    }
    if (email === "") {
      SetFormDataErrors((formDataErrors) => ({
        ...formDataErrors,
        email: "Email feild cannot be blank.",
      }));
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyItem: "center",
          height: "100vh",
          alignItems: "center",
          position: "relative",
          top: "4rem",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItem: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <h1 className="display-4">SignUp</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={(e) =>
                  SetFormData({ ...formData, name: e.target.value })
                }
              />
              <Form.Control.Feedback style={{ display: "block" }}>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback
                style={{ display: "block" }}
                type="invalid"
              >
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  SetFormData({ ...formData, email: e.target.value })
                }
              />
              <Form.Control.Feedback style={{ display: "block" }}>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback
                style={{ display: "block" }}
                type="invalid"
              >
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  SetFormData({ ...formData, password: e.target.value })
                }
              />
              <Form.Control.Feedback style={{ display: "block" }}>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback
                style={{ display: "block" }}
                type="invalid"
              >
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  SetFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <Form.Control.Feedback style={{ display: "block" }}>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback
                style={{ display: "block" }}
                type="invalid"
              >
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <div style={{ display: "flex" }}>
                {["Male", "Female", "Other"].map((type, idx) => (
                  <div key={`inline-${idx}`} className="mb-3">
                    <Form.Check
                      inline
                      label={type}
                      name="group1"
                      type="radio"
                      id={`inline-${idx}`}
                      onClick={() => SetFormData({ ...formData, gender: type })}
                    />
                  </div>
                ))}
              </div>
              <Form.Control.Feedback style={{ display: "block" }}>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback
                style={{ display: "block" }}
                type="invalid"
              >
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  SetFormData({ ...formData, city: e.target.value })
                }
              >
                {cityList.map((cityName, idx) => {
                  return (
                    <option key={idx} value={cityName}>
                      {cityName}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control.Feedback style={{ display: "block" }}>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback
                style={{ display: "block" }}
                type="invalid"
              >
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="You Agree to TnC"
                value={formData.tncAgreed}
                onChange={(e) =>
                  SetFormData({ ...formData, tncAgreed: e.target.checked })
                }
              />
              <Form.Control.Feedback style={{ display: "block" }}>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback
                style={{ display: "block" }}
                type="invalid"
              >
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="dark" type="submit" onClick={(e) => validate(e)}>
              Signup
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default SignupWithValidation;
