import React from 'react'
import './SimpleCard.css'

function SimpleCard({posterImg}) {
  return (
    <div className="simple-card">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterImg}`}
        alt="posterImage"
      />
    </div>
  );
}

export default SimpleCard