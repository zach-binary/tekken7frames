import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import characters from '../../characters';

class Movelist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sort: '',
      moves: [{}],
      loading: true,
      character: characters.find(c => c.link === props.params.link)
    }
  }

  componentWillMount() {
    fetch(this.frameDataUrl(this.state.character.link))
      .then(res => res.json())
      .then(json => {
        this.setState({ moves: json, loading: false });
      });
  }

  frameDataUrl(link) {
    return `https://t7frames.azurewebsites.net/api/parse-rbnorway?character=${link}`
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
        data={this.state.moves} loading={this.state.loading} />
    )
  }
}

export default Movelist;