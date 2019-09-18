import React, { useState } from 'react';
import './App.css';
import Main from './components/Main'

const App = () => {
  const [questions] = useState([
  {
    id: 1,
    question: "1. Hà Nội có bao nhiêu con voi?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    key: "3"
  },
  {
    id: 2,
    question: "2. Voi Hà Nội sống ở đâu (nếu có)?",
    options: [
      "Ba Vì",
      "HN không có voi",
      "Vườn Bách Thảo",
      "Thủ Lệ"
    ],
    key: "Thủ Lệ"
  },
  {
    id: 3,
    question: "3. So sánh về chức năng, vòi của voi tương ứng với bộ phận nào của con người?",
    options: [
      "Miệng",
      "Tay",
      "Mũi",
      "Mũi + tay + môi trên"
    ],
    key: "Mũi + tay + môi trên"
  },
  {
    id: 4,
    question: "4. Voi con biết đi sau bao lâu kể từ khi chào đời?",
    options: [
      "vài phút",
      "vài giờ",
      "vài ngày",
      "vài tuần"
    ],
    key: "vài phút"
  },
  {
    id: 5,
    question: "5. Việt Nam tính đến giữa năm 2019 đang có tất cả bao nhiêu con voi?",
    options: [
      "Khoảng 100",
      "Khoảng 200",
      "Khoảng 500",
      "Khoảng 50"
    ],
    key: "Khoảng 100"
  }
  ])

/*
Chuyển câu hỏi 
*/ 
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleArrowDown = () => {
    let newCurrentIndex

    if (currentIndex > questions.length - 2) {
      newCurrentIndex = 0
      setCurrentIndex(newCurrentIndex)
    }
    else {
      newCurrentIndex = currentIndex + 1
      setCurrentIndex(newCurrentIndex)
    }

    // UI - highlight chosen option
    setStatus(['', '', '', ''])

    if (questions[newCurrentIndex].answerIndex >= 0) {
      let newStatus = [...status]
      newStatus = ['', '', '', '']
      newStatus[questions[newCurrentIndex].answerIndex] = 'chosen'
      setStatus(newStatus)
    }
    // end
  }

  const handleArrowUp = () => {
    let newCurrentIndex

    if (currentIndex < 1) {
      newCurrentIndex = questions.length - 1
      setCurrentIndex(newCurrentIndex)
    } else {
      newCurrentIndex = currentIndex - 1
      setCurrentIndex(newCurrentIndex)
    }

    // UI - highlight chosen option
    setStatus(['', '', '', ''])

    if (questions[newCurrentIndex].answerIndex >= 0) {
      let newStatus = [...status]
      newStatus = ['', '', '', '']
      newStatus[questions[newCurrentIndex].answerIndex] = 'chosen'
      setStatus(newStatus)
    }
    // end
  }
/**/


/*
Người chơi chọn phương án
*/
  const [status, setStatus] = useState(['', '', '', ''])

  const handleChosen = (e, index) => {
    let newStatus = [...status]

    // Reset
    newStatus = ['', '', '', '']

    newStatus[index] = 'chosen'

    setStatus(newStatus)

    // Lưu đáp án
    questions[currentIndex].answerIndex = index
  }

/*
Check kết quả
*/

  //Check đáp án
  const handleFinish = () => {
    let correct = 0;
    let txt = "";
    let allAnswered;

    for (let i = 0; i < questions.length; i++) {
      let answerIndex = questions[i].answerIndex
      let answer = questions[i].options[answerIndex]
      let key = questions[i].key

      if (answer === key) correct++;
      else txt += `Câu ${i+1} chưa đúng.\n`;

      //Test xem đã trả lời hết chưa
      if (answerIndex === undefined) allAnswered = false; 
    }

      //Nếu chưa trả lời hết
      if (allAnswered === false) {
        let cf = window.confirm("Bạn chưa trả lời hết tất cả các câu.\nBạn có chắc muốn tính điểm?");

        if (cf === true) alert(`Bạn trả lời đúng: ${correct}/${questions.length} câu.\n${txt}`);
        else return;

      //Nếu trả lời hết rồi
      } else {
        alert(`Bạn trả lời đúng: ${correct}/${questions.length} câu.\n${txt}`);

        if (correct === questions.length) window.location.href = "quiz-congrat.html";
      }
  }


  return (
    <>
      <Main 
        questions={questions} 
        currentIndex={currentIndex} 
        handleArrowDown={handleArrowDown} 
        handleArrowUp={handleArrowUp}
        status={status}
        handleChosen={handleChosen} 
        handleFinish={handleFinish}
        />
    </>
  )
}

export default App;
