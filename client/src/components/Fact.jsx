import React from 'react';

class Fact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.fact}</h3>
      </div>
    );
  }
}

export default Fact;
