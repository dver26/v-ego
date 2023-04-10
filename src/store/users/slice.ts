import { createSlice } from '@reduxjs/toolkit'
import { type User } from '../../types/types'

const initialState: User[] = [
  {
    username: 'dver',
    id: '2',
    created_at: '5'
  }
]

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default userSlice.reducer
