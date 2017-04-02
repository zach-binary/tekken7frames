import { connect } from 'react-redux';
import FrameData from './FrameData';
import * as frameDataActions from '../../actions/frameDataActions';


function frameDataUrl(link) {
  return `https://t7frames.azurewebsites.net/api/parse-rbnorway?character=${link}`
}

const FrameDataContainer = connect(
  (state) => {
    return {
      characters: state.characters,
      frames: state.frames
    }
  },
  (dispatch) => {
    return {
      // TODO: make this into a "thunk" using redux-thunk https://github.com/gaearon/redux-thunk
      fetchFrameData: (character) => {
        fetch(frameDataUrl(character.link))
          .then(res => res.json())
          .then(json => {
            dispatch(frameDataActions.fetchFrameDataSuccess(json));
          });
      }
    }
  }
)(FrameData);

export default FrameDataContainer;