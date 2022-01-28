import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Image,
  ImageWrapper,
  OverLay,
  OverLaySpan,
  PortFolio,
  PortfolioItem,
  PortfolioList,
  PortfolioTitle,
  Span,
} from "./style";

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("Js/Data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);

  const PortFolioImages = images.map((imageItem) => {
    return (
      <ImageWrapper keu={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <OverLay>
          <OverLaySpan>Show Image</OverLaySpan>
        </OverLay>
      </ImageWrapper>
    );
  });

  return (
    <PortFolio id="portfolio">
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">{PortFolioImages}</div>
    </PortFolio>
  );
};

export default Portfolio;
