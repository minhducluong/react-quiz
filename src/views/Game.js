import React from 'react'

import Navigation from '../components/Navigation'
import Quiz from '../components/Quiz'
import Finish from '../components/Finish'

export default function Game() {
  return (
    <>
      <Finish />

      <div className="container">
        <Navigation direction="up" />
        <Quiz />
        <Navigation direction="down" />
      </div>

      <div className="hint">Bạn có thể dùng các phím mũi tên để chuyển câu hỏi</div>
    </>
  )
}
