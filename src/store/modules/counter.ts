import { createSlice, PayloadAction } from '@reduxjs/toolkit' // 创建片段

interface IState {
  count: number
  message: string
  address: string
  height: number
  direction: 'left' | 'right' | 'up' | 'down'
  name: string[]
}

const initialState: IState = {
  count: 100,
  message: 'hello Redux',
  height: 1.88,
  address: '广东',
  direction: 'left',
  name: []
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // state 本身的参数
    // payload 额外的参数
    changeMessage(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const { changeMessage } = counterSlice.actions

export default counterSlice.reducer
