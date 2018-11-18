import React from 'react';
import Track from './Track';

const Turn = ({album, tracks, highlight, onAnswerSelect}) => {
  const highlightColor = (highlight) => {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight]
  }

  return (
    <div className="row turn" style={{backgroundColor: highlightColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={album.imageUrl} className="albumImage" alt="Album"/>
      </div>
      <div className="col-6">
        {tracks.map((title) => <Track title={title} key={title} onClick={onAnswerSelect}/>)}
      </div>
    </div>
  )
}


export default Turn;
