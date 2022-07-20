import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <h2>{headline}</h2>
    );
  }
}
Title.proptype = {
  headline: PropTypes.string,
};

export default Title;
