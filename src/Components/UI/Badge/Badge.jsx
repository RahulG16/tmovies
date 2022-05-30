import React from 'react'
import './Badge.css'

function Badge({genre}) {
  return (
    <div className='genre-badge'>
        {genre}
    </div>
  )
}

export default Badge