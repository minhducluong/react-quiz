import React from 'react'
import { connect } from 'react-redux'
import { answered, total } from '../selectors'

const mapStateToProps = state => ({
  answered: answered(state),
  total: total(state)
})

const Progress = ({ answered, total }) => {
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

export default connect(
  mapStateToProps
)(Progress)
