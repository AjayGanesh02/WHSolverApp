import React from 'react'

import './resultcard.scss'

export default function ResultCard({word, path}) {
  return (
    <div className='resultcard'>
      <h3>{word}</h3>
      {path.map((coord, index) => (
        <p>({coord[0]}, {coord[1]})</p>
      ))}
    </div>
  )
}
