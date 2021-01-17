import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Image from "../assets/products.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${Image}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    text-align: center;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const ProductJumbo = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 className="jumbo-text">
          <b>
            {" "}
            <i>Our Products</i>
          </b>
        </h1>
      </Container>
    </Jumbo>
  </Styles>
);
