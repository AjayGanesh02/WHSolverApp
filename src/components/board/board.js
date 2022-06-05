import React from 'react'
import './board.scss'

export default function Board({ input, path, big }) {

  const cn = big ? 'board': 'small';
  const paths = path?.map((el) => {
    return el[0] * 4 + el[1];
  })

  return (
    <div className={cn}>
      {input && big ? <h3>Entered Board:</h3> : <></>}
      <div className='squares'>
        {input.split("").map((letter, index) => (
          <div className={paths?.includes(index) ? 'redsquare':'square'} key={index} >{letter}</div>
        ))}
      </div>
    </div>
  )
}
