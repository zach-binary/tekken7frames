import React, { Component } from 'react';

// convention is http://rbnorway.org/{link}-t7-frames/
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

export { CharacterSelect, characters };