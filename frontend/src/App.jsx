import { useState } from 'react'
import './App.css'
import ColorPalette from './components/ColorPalette'
import CubeFaceGrid from './components/CubeFaceGrid'
import FaceNavigator from './components/FaceNavigator'
import SubmitButton from './components/SubmitButton'
import validateCube from './utils/ValidateCube'

const faceKeys = ['U', 'R', 'F', 'D', 'L', 'B']
const FACE_CENTER_COLOR = {
  U: 'yellow',
  D: 'white',
  F: 'green',
  B: 'blue',
  L: 'orange',
  R: 'red',
}

function CubeEditor() {
  const [selectedColor, setSelectedColor] = useState('white')
  // Initialize cubeState with correct center stickers
  const initialCubeState = faceKeys.map(faceKey =>
    Array(9).fill(null).map((_, i) => (i === 4 ? FACE_CENTER_COLOR[faceKey] : 'white'))
  )
  const [cubeState, setCubeState] = useState(initialCubeState)
  const [currentFace, setCurrentFace] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [validation, setValidation] = useState({ valid: false, errors: [] })

  const handlePaint = (cellIdx) => {
    if (cellIdx === 4) return // Don't allow painting the center
    setCubeState(prev =>
      prev.map((face, idx) =>
        idx === currentFace
          ? face.map((color, i) => (i === 4 ? FACE_CENTER_COLOR[faceKeys[idx]] : (i === cellIdx ? selectedColor : color)))
          : face
      )
    )
  }

  // Validate cube on every change
  const cubeObj = Object.fromEntries(faceKeys.map((k, i) => [k, cubeState[i]]))
  const isCubeInputComplete = cubeState.every(face => face.every((color, i) => color && (i !== 4 || color === FACE_CENTER_COLOR[faceKeys[cubeState.indexOf(face)]])))
  const validationResult = validateCube(cubeObj)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setValidation(validationResult)
      setIsLoading(false)
      if (!validationResult.valid) {
        alert('Cube is invalid: ' + validationResult.errors.join('\n'))
      } else {
        alert('Cube is valid! (You can implement solving logic here)')
      }
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <ColorPalette selected={selectedColor} onSelect={setSelectedColor} />
      <CubeFaceGrid
        faceData={cubeState[currentFace]}
        onPaint={handlePaint}
        faceKey={faceKeys[currentFace]}
      />
      <FaceNavigator
        currentFace={currentFace}
        setCurrentFace={setCurrentFace}
      />
      <SubmitButton
        onSubmit={handleSubmit}
        isLoading={isLoading}
        isCubeInputComplete={isCubeInputComplete && validationResult.valid}
      />
      {validationResult.errors.length > 0 && !validationResult.valid && (
        <div className="text-red-500 text-sm mt-2">
          {validationResult.errors.map((err, i) => <div key={i}>{err}</div>)}
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
