import styled from "styled-components";

export const ProfilSkils = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;
export const Profil = styled.div`
  width: 50%;
  float: left;
`;
export const PrListe = styled.ul`
  list-style: none;
`;
export const PrItem = styled.li`
  margin-bottom: 8px;
`;
export const Span = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
  font-weight: ${(props) => (props.web ? "normal" : "")};
  color: ${(props) => (props.web ? "#eb5424" : "")};
`;

export const Skills = styled.div`
  width: 50%;
  float: left;
`;
export const SkDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;
export const Bar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;
export const Title = styled.span`
  float: left;
`;

export const Perc = styled.span`
  float: right;
  margin-right: 100px;
`;
export const Parent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;
export const SP = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => (props.sp1 ? "85%" : "")};
  width: ${(props) => (props.sp2 ? "75%" : "")};
  width: ${(props) => (props.sp3 ? "65%" : "")};
`;
export const PrTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const SpTitle = styled.span`
  font-weight: normal;
`;
