import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class FrameData extends Component {

  constructor(props) {
    super(props);

    this.state = {
      character: props.characters.find(c => c.link === props.params.link)
    }
  }

  componentWillMount() {
    this.props.fetchFrameData(this.state.character);
  }

  render() {
    return (
      <ReactTable
        columns={[{
          header: 'command',
          accessor: 'command'
        }, {
          header: 'startup',
          accessor: 'startUp'
        }, {
          header: 'block',
          accessor: 'block'
        }]}
        data={this.props.frames}
        loading={this.props.loading} />
    );
  }
}

export default FrameData;