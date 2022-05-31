import React from 'react'
import './board.scss'

export default function Board({ input, editable }) {
  return (
    <div className="board">

      {editable ?
        <div></div>
        :
        <>
          {input ? <h3>Entered Board:</h3>:<></>}
          <div className='squares'>
            {input.split("").map((letter, index) => (
              <div className='square' key={index} >{letter}</div>
            ))}
          </div>
        </>

      }
    </div>
  )
}
