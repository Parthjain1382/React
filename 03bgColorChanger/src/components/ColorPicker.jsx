function ColorPicker({ onColorChange }) {

  return (
    <div className="flex justify-center items-center p-1.5 gap-2 rounded-2xl flex-wrap">
      <button className="bg-red-600 rounded-1px" onClick={() => onColorChange('bg-red-600')} >Red</button>
      <button className="bg-blue-600 rounded-1px" onClick={() => onColorChange('bg-blue-600')}>blue</button>
      <button className="bg-green-600 rounded-1px" onClick={() => onColorChange('bg-green-600')}>Green</button>
      <button className="bg-yellow-400 rounded-1px" onClick={() => onColorChange('bg-yellow-600')}>yellow</button>
      <button className="bg-violet-700 rounded-1px" onClick={() => onColorChange('bg-violet-600')}>Purple</button>
    </div>
  )
}

export default ColorPicker