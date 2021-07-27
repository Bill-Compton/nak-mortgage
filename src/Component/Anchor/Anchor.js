import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Constants/Colors";
import { isAllowedKeyPress } from "../../Helpers/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import {
  faPhoneSquareAlt,
  faEnvelope,
  faLink
} from "@fortawesome/free-solid-svg-icons";

export class Anchor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        icon: faLink,
    }
    this.anchorRef = React.createRef();
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    switch(this.props.icon) {
        case 'faFacebook':
            this.setState({ icon: faFacebook });
            break;
        case 'faHandsHelping':
            this.setState({ icon: faHandsHelping });
            break;
        case 'faPhoneSquareAlt':
            this.setState({ icon: faPhoneSquareAlt });
            break;
        case 'faEnvelope':
            this.setState({ icon: faEnvelope }); 
            break;
        default:
            this.setState({ icon: faLink})      
    }
  }

  handleKeyPress(e)  {
      if(isAllowedKeyPress(e)) {
        e.preventDefault();
        this.anchorRef.click()
      }
    }

  render() {
    let StyledAnchor = styled.a`
        margin: 30px 0 0 0;
        display: block;
        &:hover,
        &:focus {
            color: ${colors.$anchorBlue};
        }
        &:focus {
            border: 0 solid ${colors.$white};
            border-radius: 4px;
            box-shadow: 0 0 0 2px ${colors.$NAK_Blue};
            margin: 0;
            padding: 1px;
        }
        &:focus-visible {
            outline: none;
        }
    `;

    let Span = styled.p`
        font-size: 12px;
    `;

    return (
      <StyledAnchor
        className={this.props.className}
        href={this.props.href}
        target="_blank"
        onKeyPress={this.handleKeyPress}
        ref={el => this.anchorRef = el}
      >
          <Span>
              <FontAwesomeIcon size={this.props.size} icon={this.state.icon} />
              {this.props.value}
            </Span>
      </StyledAnchor>
    );
  }
}
