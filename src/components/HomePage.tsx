import React from 'react'
import { type User } from '../types/types'
import { type RootState } from '../store'
import { useAppSelector } from '../hooks/store'

const HomePage: React.FC = () => {
  const users = useAppSelector((state: RootState) => state.users)
  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.username}</h1>
      ))}
    </div>
  )
}

export default HomePage
