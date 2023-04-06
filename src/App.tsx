import './App.css'
import { useEffect, useState } from 'react'
import { supabase } from './supabase/supabase'

const App: React.FC = () => {
  const [hola, setHola] = useState('hola')

  useEffect(() => {}, [])

  return (
    <>
      <div>Hola</div>
      <div>V-Ego</div>
    </>
  )
}

export default App
