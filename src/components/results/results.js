import React from 'react'
import ResultCard from './resultCard'

import './results.scss'

export default function Results({ results, submitted, board }) {
  return (
    <div className='results'>
      {results.length > 0 ? <h3>{results.length} words found</h3> : <></>}
      {results.length > 0 ?
        <div className='cards'>
          {results.map((result, index) => (
            <ResultCard key={index} word={result.word} path={result.path} board={board} />
          ))}
        </div>
        : submitted ? <p>No words found</p> : <></>}
    </div>
  )
}
