import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { next, prev } from '../reducers/currentSlice'
import { totalSelector } from '../selectors/index'

export default function Navigation ({ direction }) {
  const questionsLength = useSelector(totalSelector)
  const dispatch = useDispatch()
  return <i 
    className={'fas fa-chevron-' + direction}
    onClick={ () => 
      direction === 'down' 
      ? dispatch(next(questionsLength)) 
      : dispatch(prev(questionsLength)) 
    }
  />
}


