import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "./Photos.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  // const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col md={10}>
          <h1 className="display-4" style={{ textAlign: "left" }}>
            Photos
          </h1>
          <p className="lead" style={{ textAlign: "left" }}>
            Explore range of images from Unsplash
          </p>
        </Col>
        <Col md={2}>
          {/* <Button
            variant="dark"
            size="lg"
            onClick={() => setShowAllPhotos(!showAllPhotos)}
          >
            {showAllPhotos ? "Hide" : "Show"} all photos
          </Button> */}
        </Col>
      </Row>
      <hr></hr>
      <Row>
        {photos.length ? (
          photos.map((photo) => (
            <Col md={3} className="photos-card" key={photo.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={photo.download_url} />
                <Card.Body>
                  <Card.Title>{photo.author}</Card.Title>

                  <div style={{ display: "flex" }}>
                    <a
                      className="btn btn-dark"
                      href={photo.url}
                      style={{ marginRight: "10px" }}
                    >
                      View details
                    </a>
                    <Link className="btn btn-dark" to={`/photos/${photo.id}`}>
                      View enlarged
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner
            style={{
              position: "relative",
              top: "2rem",
              left: "50%",
            }}
            animation="border"
            variant="dark"
          />
        )}
      </Row>
    </Container>
  );
};

export default Photos;
