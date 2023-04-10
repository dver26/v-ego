import './App.css'
import { useEffect, useState } from 'react'
import { supabase } from './supabase/supabase'
import { type User } from './types/types'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

const App: React.FC = () => {
  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    async function getData(): Promise<void> {
      const { data: result, error } = await supabase.from('users').select('*')
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      error ? console.log(error) : setData(result)
    }
    getData().catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
