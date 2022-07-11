//reducer
//reducerでStore内のStateを更新する

import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_SONGS_ARRAY
} from "./types";

const playReducer = (state, action) => {
  switch (action.type) {
    case SET_SONGS_ARRAY:
      return {
        ...state,
        songs: action.data
      };
    //const songsSet = (songArr) =>
    //dispatch({ type: SET_SONGS_ARRAY, data: songArr });
    // など、具体的なアクションが一致した後に、他の属性を指定できる。
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
        playing: true
      };
    case TOGGLE_RANDOM:
      return {
        ...state,
        random: action.data
      };
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.data
      };
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data
      };
    default:
      return state;
  }
};

export default playReducer;
