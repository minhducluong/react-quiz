import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { answeredSelector, pointSelector, totalSelector, falseAnswersSelector} from '../selectors'

export default function Finish () {
  const answered = useSelector(answeredSelector)
  const point = useSelector(pointSelector)
  const total = useSelector(totalSelector)
  const falseAnswers = useSelector(falseAnswersSelector)

  let history = useHistory()

  const handleFinish = () => {

    if (answered < total) {
      // eslint-disable-next-line
      if (confirm("Bạn chưa trả lời hết tất cả các câu.\nBạn có chắc chắn muốn tính điểm?")) {
        alert(`Bạn trả lời đúng ${point}/${total} câu.\nCâu chưa đúng là ${falseAnswers.join(', ')}.\nTrả lời đúng hết sẽ có phần thưởng.`);
      }
    } else {
      if (point === total) {
        history.push('/congrat')
      } else {
        alert(`Bạn trả lời đúng ${point}/${total} câu.\nCâu chưa đúng là ${falseAnswers.join(', ')}.\nTrả lời đúng hết sẽ có phần thưởng.`);
      }
    }
  }

  let klass = 'finish'
  if (answered === total) klass += ' allAnswered pulse'

  return (
    <div className={klass} onClick={handleFinish}>
      <i className="fas fa-paper-plane"></i>
      Finish
  </div>
  )
}

