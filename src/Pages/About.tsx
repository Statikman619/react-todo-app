import { Container } from "@material-ui/core";
import {
  Twitter,
  GitHub,
  Facebook,
  LinkedIn,
  Instagram,
} from "@material-ui/icons";

const About = () => {
  return (
    <>
      <Container>
        <p style={{ fontSize: "1.3rem" }}>
          <b>Mike's Todos</b> This is an open-source project tutorial that I found on YouTube started by Usman Sabuwala.
          This app helps you create todos but also gives the user the ability to update and delete your todos with the 
          ability to use a light and dark theme. Enjoy your new todo app.
        </p>
        <h2>Contact</h2>
        <a
          href="https://twitter.com/Statikman619"
          style={{
            color: "#1CA0F1",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </a>
        <a
          href="https://github.com/Statikman619"
          style={{
            color: "#24292E",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/statikman619"
          style={{
            color: "#0D8BF0",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-martinezstatikman619/"
          style={{
            color: "#FD0000",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/statikmna619"
          style={{
            color: "#CD2E96",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </a>
      </Container>
    </>
  );
};

export default About;