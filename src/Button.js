import React, { Component } from 'react';

class Button extends Component
{
    render()
    {
      return (<button onClick={ () => {this.props.channel(this.props.value)}}>{this.props.value}</button>);
    }
}


export default Button;