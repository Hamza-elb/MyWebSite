import React from "react";
import {
  AboutInfo,
  AboutSection,
  InfoDesc,
  InfoDir,
  InfoTitle,
  Span,
} from "./style";

const About = () => {
  return (
    <AboutSection>
      <div className="container" id="about">
        <AboutInfo>
          <InfoTitle>
            <Span>This is</Span> Me
          </InfoTitle>
          <InfoDir>Full Stack Web Developer</InfoDir>
          <InfoDesc>
            Agé de 22 ans, actuellement en 2 -ème année cycle d'ingénieur en
            génie informatique à l'école nationale des sciences appliquées
            d'OUJDA. Je souhaite trouver un stage d'application convenable à mes
            compétences et ma carrière.
          </InfoDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};

export default About;
