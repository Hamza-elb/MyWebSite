import React from "react";

import {
  PrListe,
  PrItem,
  Profil,
  ProfilSkils,
  Title,
  PrTitle,
  Parent,
  Skills,
  Span,
  Bar,
  Perc,
  SP,
} from "./style";

const Profile = () => {
  return (
    <ProfilSkils>
      <div className="container">
        <Profil>
          <PrTitle>
            <pan>My </pan>Profile
          </PrTitle>
          <PrListe>
            <PrItem>
              <Span>Name</Span>
              EL-BOURISSI HAMZA
            </PrItem>
            <PrItem>
              <Span>Birthday</Span>
              06/11/1999
            </PrItem>
            <PrItem>
              <Span>Address</Span>
              Rue 15 DB 01 NO 21 AL WAHDA 01 MEKNES
            </PrItem>
            <PrItem>
              <Span>Phone</Span>
              0614431708
            </PrItem>
            <PrItem>
              <Span>Email</Span>
              hamza.elbourissi.10@gmail.com
            </PrItem>
            <PrItem>
              <Span>Website</Span>
              <Span web>https://elbourissihamza.netlify.app</Span>
            </PrItem>
          </PrListe>
        </Profil>

        <Skills>
          <PrTitle>
            Some <Span>skills</Span>
          </PrTitle>

          <Bar>
            <Title>Java,Php,Js,C#</Title>
            <Perc>85%</Perc>
            <Parent>
              <SP sp1></SP>
            </Parent>
          </Bar>

          <Bar>
            <Title>Reactjs,Laravel,Jee</Title>
            <Perc>75%</Perc>
            <Parent>
              <SP sp2></SP>
            </Parent>
          </Bar>

          <Bar>
            <Title>ASP.Net,Python,JavaFx</Title>
            <Perc>65%</Perc>
            <Parent>
              <SP sp3></SP>
            </Parent>
          </Bar>
        </Skills>
      </div>
    </ProfilSkils>
  );
};

export default Profile;
