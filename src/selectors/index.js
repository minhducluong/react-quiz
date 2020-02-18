import { createSelector } from '@reduxjs/toolkit'

const questions = state => state.questions

export const answered = createSelector(
  questions,
  questions => questions.reduce((total, question) =>
    question.chosen || question.chosen === 0
      ? total + 1
      : total
    , 0)
)

export const point = createSelector(
  questions,
  questions => questions.reduce((point, question) =>
    question.chosen === question.key
      ? point + 1
      : point
    , 0)
)

export const total = createSelector(
  questions,
  questions => questions.length
)

export const falseAnswers = createSelector(
  questions,
  questions => {
    const falseAnswers = []

    questions.forEach((question, index) => {
      if (question.chosen !== question.key) {
        falseAnswers.push(index + 1)
      }
    })

    return falseAnswers
  }
)