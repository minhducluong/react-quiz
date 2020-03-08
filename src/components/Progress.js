import React from 'react'
import { useSelector } from 'react-redux'
import { answeredSelector, totalSelector } from '../selectors'

export default function Progress(){
  const answered = useSelector(answeredSelector)
  const total = useSelector(totalSelector)

  const progress = answered / total * 100
  let klass = 'progress'
  if (progress === 100) klass += ' done'
  return (
    <div 
    className={klass}
    style={{width: progress + '%'}}
  ></div>
  )
}
