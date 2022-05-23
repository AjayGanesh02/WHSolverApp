import React from 'react'
import ResultCard from './resultCard'

import './results.scss'

export default function Results({results, submitted}) {
  return (
    <div className='results'>
      {results.length > 0 ? <p>{results.length} words found</p> : <></>}
      {results.length > 0 ? 
      results.map((result, index) => (
          <ResultCard key={index} word={result.word} path={result.path}/>
      )) : submitted ? <p>No words found</p> : <></>} 
    </div>
  )
}
