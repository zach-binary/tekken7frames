function frameDataUrl(link) {
  return `https://t7frames.azurewebsites.net/api/parse-rbnorway?character=${link}`
}

export const FETCH_FRAME_DATA_SUCCESS = "FETCH_FRAME_DATA_SUCCESS";

export function fetchFrameDataSuccess(frames) {
  return {
    type: FETCH_FRAME_DATA_SUCCESS,
    frames
  }
}

// a "thunk" using redux-thunk https://github.com/gaearon/redux-thunk

export const FETCH_FRAME_DATA = "FETCH_FRAME_DATA"

export function fetchFrameData(character) {
  return (dispatch) => {
    
    dispatch({ 
      type: FETCH_FRAME_DATA 
    });

    fetch(frameDataUrl(character.link))
      .then(res => res.json())
      .then(json => {
        dispatch(fetchFrameDataSuccess(json));
      });
  }
}