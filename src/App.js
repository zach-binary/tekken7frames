import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './App.css';

const characters = [
  {
    name: 'Bryan Fury',
    link: 'bryan'
  },
  {
    name: 'Lars',
    link: 'lars'
  }
];

class CharacterSelect extends Component {
  render() {
    return (
      <div className='characters'>
        <ul>
          {characters.map(character => 
            <li key={character.link}>
              <a href={`/character/${character.link}`}>{character.name}</a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

class FrameData extends Component {

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

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export { App, CharacterSelect, FrameData };
