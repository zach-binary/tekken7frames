import { combineReducers } from 'redux';
import characters from '../characters';
import * as frameDataActions from '../actions/frameDataActions';

export default combineReducers({

    // using preloaded state doesn't work unless there is a key here..
    // so I'm just initializing here instead
    characters: (state=characters) => state,

    frames: (state = [], action) => {
        if (action.type === frameDataActions.FETCH_FRAME_DATA_SUCCESS) {
            return action.frames;
        }

        return state;
    },

    loading: (state = false, action) => {
        console.log(action);
        if (action.type === frameDataActions.FETCH_FRAME_DATA)
            return true;
        if (action.type === frameDataActions.FETCH_FRAME_DATA_SUCCESS)
            return false;

        return state;
    }
})