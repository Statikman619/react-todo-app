import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddTodo = ({ makeTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const createTodo = (e) => {
    e.preventDefault();
    setText("");
    makeTodos(text);
  };
};

export default AddTodo;
