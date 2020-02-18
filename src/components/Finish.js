import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { answered, point, total, falseAnswers} from '../selectors'

const mapStateToProps = state => ({
  answered: answered(state),
  point: point(state),
  total: total(state),
  falseAnswers: falseAnswers(state)
})

const Finish = ({ answered, point, total, falseAnswers }) => {
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

export default connect(
  mapStateToProps
)(Finish)

