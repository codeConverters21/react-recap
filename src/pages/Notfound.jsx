import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <ButtonGroup aria-label="Basic example">
      <Button onClick={() => navigate(-1)} variant="secondary">
        Go Back
      </Button>

      <Button onClick={() => navigate("/")} variant="secondary">
        Go Home
      </Button>
    </ButtonGroup>
  );
};

export default Notfound;
