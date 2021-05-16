import React, { Component } from 'react';


export default class Heading extends Component {

    render() {
        const Title = `h` + this.props.level
        return(
            <Title className={this.props.className}>{this.props.headingMessage}</Title>
        )
    }
}