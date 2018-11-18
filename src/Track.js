import React from 'react';

const Track = ({title, onClick}) => {
  return (
    <div className="answer" onClick={() => {onClick(title)}}>
      <h4>{title}</h4>
    </div>

  )
}

export default Track;
