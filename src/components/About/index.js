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
            Aged 22, currently in his 2nd year engineering cycle in computer
            engineering at the national school of applied sciences from OUJDA. I
            want to find an application internship suitable for my skills and my
            career.
          </InfoDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};

export default About;
