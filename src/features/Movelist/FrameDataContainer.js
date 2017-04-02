import { connect } from 'react-redux';
import FrameData from './FrameData';
import * as frameDataActions from '../../actions/frameDataActions';

const FrameDataContainer = connect(
  (state) => {
    return {
      characters: state.characters,
      frames: state.frames,
      loading: state.loading
    }
  },
  (dispatch) => {
    return {
      fetchFrameData: (character) => {
        dispatch(frameDataActions.fetchFrameData(character));
      }
    }
  }
)(FrameData);

export default FrameDataContainer;