export const answeredSelector = state => state.questions.reduce((total, question) =>
  question.chosen || question.chosen === 0
    ? total + 1
    : total
  , 0)

export const pointSelector = state => state.questions.reduce((point, question) =>
  question.chosen === question.key
    ? point + 1
    : point
  , 0)

export const totalSelector = state => state.questions.length

export const falseAnswersSelector = state => {
  const falseAnswers = []

  state.questions.forEach((question, index) => {
    if (question.chosen !== question.key) {
      falseAnswers.push(index + 1)
    }
  })

  return falseAnswers
}