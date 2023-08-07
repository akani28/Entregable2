
import { useEffect } from 'react'
import './App.css'

function App() {

  const success = (pos) =>{
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`

  }
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success)
  },[])
 

  return (
    <main className='bg-black min-h-screen text-white'>
      <h2>weather</h2>
   
    </main>
  )
}

export default App
