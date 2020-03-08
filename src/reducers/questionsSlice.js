import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    select: (state, action) => {
      const current = action.payload.current
      const index = action.payload.index
      const chosen = state[current].chosen

      state[current].chosen =
        chosen === index 
        ? null
        : index
    }
  }
})

const { actions, reducer } = questions

export const { select } = actions

export default reducer