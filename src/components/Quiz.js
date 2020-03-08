import React from 'react'
import { useSelector } from 'react-redux'

import Option from './Option'
import Progress from './Progress'

export default function Quiz() {
  const current = useSelector(state => state.current)
  const currentQuestion = useSelector(state => state.questions[state.current])
  return (
    <div className="wrapper">
      <div className="question">{current + 1}. {currentQuestion.question}</div>
      <div className="option_wrap">
        {currentQuestion.options.map((option, index) =>
          <Option
            key={index}
            option={option}
            chosen={currentQuestion.chosen}
            index={index} />
        )}
      </div>
      <Progress />
    </div>
  )
}
