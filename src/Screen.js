import React from 'react';  

class Screen extends React.Component {

    render()
    {
        return (
            <div><input value={this.props.input} readOnly/><br/></div>
        );
  }
}

export default Screen;