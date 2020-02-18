import React from 'react'
import { connect } from 'react-redux'
import { next, prev } from '../reducers'

const mapDispatchToProps = { next, prev }

const Navigation = ({ direction, next, prev }) => {
  return <i 
    className={'fas fa-chevron-' + direction}
    onClick={ () => direction === 'down' ? next() : prev() }
  />
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation)


