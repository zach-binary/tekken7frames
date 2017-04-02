import React from 'react';

const CharacterList = (props) => {
  return (
    <div className='characters'>
      <ul>
        {props.characters.map(character =>
          <li key={character.link}>
            <a href={`/character/${character.link}`}>{character.name}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default CharacterList;