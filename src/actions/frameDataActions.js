export const FETCH_FRAME_DATA_SUCCESS = "FETCH_FRAME_DATA_SUCCESS";

export function fetchFrameDataSuccess(frames) {
    return {
        type: FETCH_FRAME_DATA_SUCCESS,
        frames
    }
}