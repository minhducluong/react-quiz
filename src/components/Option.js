import React from 'react'

import { select } from '../reducers'
import { connect } from 'react-redux'

const mapDispatchToProps = { select }

const Option = ({ index, option, select, chosen }) => {
  return <div 
    onClick={() => select(index)}
    className={chosen === index ? 'option chosen' : 'option'}
    >
    {option}
  </div>
}

export default connect(
  null,
  mapDispatchToProps
)(Option)
