import React from "react";
import { Heading, P } from "./NoMatch.style";

export default class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <Heading>Ooops!?!?!? It seems this page doesn't exist</Heading>
        <P>You may click the NAK Mortgage Logo to get back home</P>
      </div>
    );
  }
}
