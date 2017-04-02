import React, { Component } from 'react';
import FrameDataContainer from './FrameDataContainer';

class Movelist extends Component {

  render() {
    return (
      <FrameDataContainer {...this.props} />
    )
  }
}

export default Movelist;