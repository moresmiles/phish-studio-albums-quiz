import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import Quiz from './Quiz';
import {shuffle, sample} from 'underscore';
import {albums} from './albums'


const getTurnData = (albums) => {
  const allTracks = albums.reduce((p,c,i) => {
    return p.concat(c.tracks)
  }, [])
  const fourRandomTracks = shuffle(allTracks).slice(0,4)
  const answer = sample(fourRandomTracks);
  return {
    tracks: fourRandomTracks,
    album: albums.find((album) =>
      album.tracks.some((title) =>
      title === answer))
    }
}

const reducer = (
  state = {albums, turnData: getTurnData(albums), highlight: ''}, action) => {
    switch(action.type) {
      case 'ANSWER_SELECTED':
        const isCorrect = state.turnData.album.tracks.some((track) => track === action.answer)
        return Object.assign({},
          state, {
            highlight: isCorrect? 'correct' : 'wrong'
          });
      case 'CONTINUE':
        return Object.assign({}, state, {
          highlight: '',
          turnData: getTurnData(state.albums)
        });
      default: return state;
    }
}

let store = Redux.createStore(reducer);


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Quiz />
  </ReactRedux.Provider>
, document.getElementById('root'));
