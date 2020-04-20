import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 30px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  handleSubmit,
  error,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Show...."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Result">
            {movieResults.map(movie => (
              <Poster
                id={movie.id}
                key={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={
                  movie.release_date ? movie.release_date.substring(0, 4) : null
                }
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Result">
            {tvResults.map(show => (
              <Poster
                id={show.id}
                key={show.id}
                title={show.original_name}
                imageUrl={show.backdrop_path}
                rating={show.vote_average}
                year={
                  show.first_air_date
                    ? show.first_air_date.substring(0, 4)
                    : null
                }
              />
            ))}
          </Section>
        )}
        {error && <Message color="#95a5a6" text={error} />}
        {tvResults && movieResults && tvResults.length === 0 && (
          <Message text="Nothing found" color="#81ecec" />
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  error: propTypes.string,
  searchTerm: propTypes.string,
  loading: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.func.isRequired
};

export default SearchPresenter;
