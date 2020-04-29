import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Directory from "../components/directory/directory";


function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Gitster</h1>
        <h2>They all suck!!!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
      <Directory/>
       
      </Container>
    </div>
  );
}

export default About;




