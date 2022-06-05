import React from 'react'

import './resultcard.scss'
import Board from '../board/board'

export default function ResultCard({ word, path }) {
  return (
    <div className='resultcard'>
      <h3>{word}</h3>
      <div className='path'>
        <Board input={"abcdefghijklmnop"} big={false}/>
      </div>
    </div>
  )
}
