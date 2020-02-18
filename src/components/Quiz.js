import React from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { connect } from 'react-redux'

import Option from './Option'
import Progress from './Progress'

const questions = state => state.questions
const current = state => state.current

const currentQuestion = createSelector(
  questions,
  current,
  (questions, current) => questions[current]
)

const mapStateToProps = state => ({
  question: currentQuestion(state),
  current: current(state)
})

const Quiz = ({ question, current }) => {
  return (
    <div className="wrapper">
      <div className="question">{current + 1}. {question.question}</div>
      <div className="option_wrap">
        {question.options.map((option, index) =>
          <Option
            key={index}
            option={option}
            chosen={question.chosen}
            index={index} />
        )}
      </div>
      <Progress />
    </div>
  )
}

export default connect(
  mapStateToProps
)(Quiz)
