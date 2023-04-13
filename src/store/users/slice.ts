import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User } from '../../types/types'

const initialState: User[] = [
  {
    username: 'dver',
    id: '2',
    created_at: '5'
  }
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<User['id']>) => {
      const id = action.payload
      return state.filter((user) => user.id === id)
    }
  }
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions
