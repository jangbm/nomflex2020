import React from "react";
import imdb from "../assets/imdb.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-image: url(${imdb});
  background-position: center center;
  background-size: cover;
`;

export default class extends React.Component {
  render() {
    const { ImdbId } = this.props;
    const { ToImdb } = this;

    ToImdb = () => {
      <Link to={`https://www.imdb.com/title/${ImdbId}`} />;
    };

    return <Container onClick={ToImdb}></Container>;
  }
}
