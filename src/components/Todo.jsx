import React from "react";
import { Card, CardContent, Typography, Container } from "@material-ui/core";

const Todo = ({ todo, todoNo }) => {
  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "lightgray" }}
      ></Card>
    </Container>
  );
};

export default Todo;
