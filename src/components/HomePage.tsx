import React from 'react'
import { type User } from '../types/types'
import { type RootState } from '../store'

import { useAppSelector, useAppDispatch } from '../hooks/store'
import { deleteUserById } from '../store/users/slice'

const HomePage: React.FC = () => {
  const users = useAppSelector((state: RootState) => state.users)
  const dispatch = useAppDispatch()

  const handleRemoveUser = (id: User['id']): void => {
    dispatch(deleteUserById(id))
  }

  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.username}</h1>
      ))}
    </div>
  )
}

export default HomePage
