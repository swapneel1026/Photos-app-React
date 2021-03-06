import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Spinner } from "react-bootstrap";
import { CircularProgress } from "@mui/material";

function PhotoEnlarged() {
  const [photoURL, setPhotoURL] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://picsum.photos/id/${id}/info`)
      .then((res) => setPhotoURL(res.data.download_url))
      .catch((err) => console.log(err.message));
  }, [id]);

  let styles = {
    imgStyle: {
      width: "90vw",
      height: "85vh",
      margin: "20px ",
    },
    spinnerDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh",
    },
  };

  return (
    <div>
      {photoURL ? (
        <img src={photoURL} style={styles.imgStyle} alt="expanded-view" />
      ) : (
        <div style={styles.spinnerDiv}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default PhotoEnlarged;
