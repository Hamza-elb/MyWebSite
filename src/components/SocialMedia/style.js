import styled from "styled-components";
import { Link } from "react-router-dom";
export const SocialMedia = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
`;
export const Sociall = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background: ${(props) => (props.item === 1 ? "#3b5998" : "")};
  background: ${(props) => (props.item === 2 ? "#171515" : "")};
  background: ${(props) => (props.item === 3 ? " #C13584" : "")};
`;

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
  margin-top: 27px;
`;
export const SocialDesc = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  float: left;
`;
export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
`;
export const SpaceInfo = styled.span`
  font-weight: normal;
`;
export const A = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #eb5424;
  }
`;

export const NLink = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #eb5424;
  }
`;
