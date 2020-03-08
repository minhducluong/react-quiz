import React from 'react'
import { select } from '../reducers/questionsSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Option({ index, option, chosen }) {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current)
  return <div 
    onClick={() => dispatch(select({index, current}))}
    className={chosen === index ? 'option chosen' : 'option'}
    >
    {option}
  </div>
}
