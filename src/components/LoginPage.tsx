import React, { useState } from 'react'
import { supabase } from '../supabase/supabase'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(e?.target.value)
  }

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e?.target.value)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    try {
      const res = await supabase.auth.signUp({
        email,
        password
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <label htmlFor=''>Username</label>
      <input type='text' onChange={handleUsernameChange} />
      <br />
      <label htmlFor=''>Password</label>
      <input type='text' onChange={handlePasswordChange} />
      <button type='submit'>Send</button>
    </form>
  )
}

export default LoginPage
