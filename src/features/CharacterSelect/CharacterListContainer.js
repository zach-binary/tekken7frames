import { connect } from 'react-redux';
import CharacterList from './CharacterList';

const CharacterListContainer = connect(
  (state) => {
    return {
      characters: state.characters
    }
  }
)(CharacterList);

export default CharacterListContainer;