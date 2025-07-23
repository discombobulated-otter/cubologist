
import { useState, useEffect } from 'react'
import ColorPalette from './components/ColorPalette'
import CubeFaceGrid from './components/CubeFaceGrid'
import FaceNavigator from './components/FaceNavigator'
import SubmitButton from './components/SubmitButton'
import validateCube from './utils/ValidateCube'
import {
  initializeCubeState,
  paintCubeCell,
  checkCubeComplete,
  buildCubeObject,
} from './utils/CubeHelper'

const faceKeys = ['U', 'R', 'F', 'D', 'L', 'B']

function CubeEditor() {
  const [selectedColor, setSelectedColor] = useState('white')
  const [cubeState, setCubeState] = useState(initializeCubeState)
  const [currentFace, setCurrentFace] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [validation, setValidation] = useState({ valid: false, errors: [] })

  useEffect(() => {
    const result = validateCube(buildCubeObject(cubeState))
    setValidation(result)
  }, [cubeState])

  const handlePaint = (cellIdx) => {
    if (cellIdx === 4) return
    setCubeState(prev => paintCubeCell(prev, currentFace, cellIdx, selectedColor))
  }

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (!validation.valid) {
        alert('Cube is invalid: ' + validation.errors.join('\n'))
      } else {
        alert('Cube is valid! (You can implement solving logic here)')
      }
    }, 1000)
  }

  const isCubeInputComplete = checkCubeComplete(cubeState)

  return (
<div className="min-h-screen flex flex-col justify-center items-center gap-6 p-8 bg-[#030712] text-white select-none">

      <ColorPalette selected={selectedColor} onSelect={setSelectedColor} />

      <div className="text-2xl font-bold text-center mb-4">Current Face: {faceKeys[currentFace]}</div>

      <div className="m-4 flex flex-col items-center gap-10">
        <CubeFaceGrid
          faceData={cubeState[currentFace]}
          onPaint={handlePaint}
          faceKey={faceKeys[currentFace]}
        />
      </div>
    <div className="flex justify-center items-center space-x-4 mb-6">
      <FaceNavigator
        currentFace={currentFace} 
        setCurrentFace={setCurrentFace}
      />
    </div>
      <SubmitButton
        onSubmit={handleSubmit}
        isLoading={isLoading}
        isCubeInputComplete={isCubeInputComplete && validation.valid}
      />

      {validation.errors.length > 0 && !validation.valid && (
        <div className="text-red-500 text-sm mt-2">
          {validation.errors.map((err, i) => <div key={i}>{err}</div>)}
        </div>
      )}
    </div>
  )
}

function App() {
  return <CubeEditor />
}

export default App
export { CubeEditor }
