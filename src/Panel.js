import React, { Component } from "react";
import Button from "./Button";

class Panel extends Component
{
    render()
    {
        let options1 = []
        for (let j = 0; j <= 8; j += 1) { options1.push(j) }
        return (
          <div>
          {options1.map((i) => {
            return (
                <Button channel={this.props.channel} value={i}/>
             )})}
          </div>
            
        )
    }
}

export default Panel;
