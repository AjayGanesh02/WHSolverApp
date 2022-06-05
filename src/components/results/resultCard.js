import React from 'react'

import './resultcard.scss'
import Board from '../board/board'

export default function ResultCard({ word, path, board }) {
  return (
    <div className='resultcard'>
      <h3>{word}</h3>
        <Board input={board} path={path} big={false}/>
    </div>
  )
}
