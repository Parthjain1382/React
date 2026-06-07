import { useState } from 'react'
import './App.css'
import ColorPicker from './components/ColorPicker'
function App() {
  const [bgClass, setbgClass] = useState('bg-red-500')


  return (
    <div className={`min-h-screen ${bgClass}`}>
      <h1>Color Change</h1>
      <div>
        <ColorPicker onColorChange={setbgClass} />
      </div>
    </div >
  )
}

export default App
