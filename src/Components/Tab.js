import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 540px;
  height: 270px;
  background-color: rgba(0, 0, 0, 0.4);
  margin-top: 10px;
`;

const Menu = styled.div`
  font-size: 15px;
  padding-top: 20px;
`;

const ClicTitle = styled.span`
  padding: 5px 20px;

  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const Title = styled.span`
  padding: 5px 20px;
  color: rgba(0, 0, 0, 0.6);
  background-color: rgba(255, 255, 255, 0.4);
  text-align: center;
`;

export default ({ cats, currentTab, result, changeCats }) => {
  const subscript = (useCat) => {
    switch (useCat) {
      case "Production":
        console.log(result);
        console.log(result.production_companies[0].name);
        {
          result.production_companies.map((company) => (
            <div>
              {company.name}
              {console.log(company.name)}
            </div>
          ));
        }

        break;
      case "Country":
        console.log("Country");
        break;
      case "Vote-Count":
        console.log("Vote-Count");
        break;
    }
  };

  return (
    <>
      <Menu>
        {cats.map((cat) =>
          cat.name === currentTab ? (
            <>
              <ClicTitle key={cat.id}>{cat.name}</ClicTitle>
              <span>{subscript(cat.name)}</span>
              <span></span>
            </>
          ) : (
            <Title key={cat.id} onMouseEnter={() => changeCats(cat.name)}>
              {cat.name}
            </Title>
          )
        )}
        <Container></Container>
      </Menu>
    </>
  );
};
