import React from "react";
import {
  HomeBtn,
  HomeDesc,
  HomeInfo,
  HomeInformation,
  HomeSection,
  HomeTitle,
  Span,
} from "./style";

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>EL-BOURISSI HAMZA</HomeTitle>
          <HomeInfo>Full Stack Web Developer</HomeInfo>
          <HomeDesc>
            I am EL-BOURISSI Hamza, a <Span>software engineer</Span> and
            <Span> full stack web Devloper </Span>
            Let us work together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
