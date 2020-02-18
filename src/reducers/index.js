import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  current: 0,
  questions: [
    {
      question: "Hà Nội có bao nhiêu con voi?",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      key: 3
    },
    {
      question: "Voi Hà Nội sống ở đâu (nếu có)?",
      options: [
        "Ba Vì",
        "HN không có voi",
        "Vườn Bách Thảo",
        "Thủ Lệ"
      ],
      key: 3
    },
    {
      question: "So sánh về chức năng, vòi của voi tương ứng với bộ phận nào của con người?",
      options: [
        "Miệng",
        "Tay",
        "Mũi",
        "Mũi + tay + môi trên"
      ],
      key: 3
    },
    {
      question: "Voi con biết đi sau bao lâu kể từ khi chào đời?",
      options: [
        "vài phút",
        "vài giờ",
        "vài ngày",
        "vài tuần"
      ],
      key: 1
    },
    {
      question: "Việt Nam tính đến giữa năm 2019 đang có tất cả bao nhiêu con voi?",
      options: [
        "Khoảng 100",
        "Khoảng 200",
        "Khoảng 500",
        "Khoảng 50"
      ],
      key: 0
    }
  ]
}

export const prev = createAction('prev')
export const next = createAction('next')
export const select = createAction('select')

export default createReducer(initialState, {
  prev(state) {
    let current = state.current

    if (current === 0) state.current = state.questions.length - 1
    else state.current -= 1
  },
  next(state) {
    let current = state.current

    if (current === state.questions.length - 1) state.current = 0
    else state.current += 1
  },
  select(state, action) {
    const current = state.current
    const index = action.payload
    const chosen = state.questions[current].chosen

    state.questions[current].chosen = index

    if (chosen === index) state.questions[current].chosen = null
  }
})