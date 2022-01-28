import React from "react";
import {
  SocialMedia,
  Icon,
  SocialDesc,
  Span,
  SpaceInfo,
  Sociall,
} from "./style";
import axios from "axios";

class Social extends React.Component {
  state = {
    social: [],
  };

  componentDidMount() {
    axios.get("Js/Data.json").then((res) => {
      this.setState({
        social: res.data.social,
      });
    });
  }
  render() {
    const { social } = this.state;
    const socialList = social.map((socialItem) => {
      return (
        <Sociall item={socialItem.id} key={socialItem.id}>
          <a href={socialItem.lien}>
            <Icon className={socialItem.icon}></Icon>
          </a>

          <SocialDesc>
            <Span>{socialItem.title}</Span>
            <SpaceInfo>{socialItem.body}</SpaceInfo>
          </SocialDesc>
        </Sociall>
      );
    });
    return <SocialMedia>{socialList}</SocialMedia>;
  }
}
export default Social;
