import { combineReducers } from 'redux';
import characters from '../characters';

export default combineReducers({

    // using preloaded state doesn't work unless there is a key here..
    // so I'm just initializing here instead
    characters: (state=characters) => state,
    
    frameData: (state = {}, action) => {
        return state;
    }
})