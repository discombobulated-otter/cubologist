// File: src/utils/cubeHelpers.js

const faceKeys = ['U', 'R', 'F', 'D', 'L', 'B']

export const FACE_CENTER_COLOR = {
  U: 'yellow',
  D: 'white',
  F: 'green',
  B: 'blue',
  L: 'orange',
  R: 'red',
}

export const initializeCubeState = () =>
  faceKeys.map(faceKey =>
    Array(9).fill(null).map((_, i) => (i === 4 ? FACE_CENTER_COLOR[faceKey] : '#030712'))
  )

export const paintCubeCell = (prevState, faceIdx, cellIdx, color) =>
  prevState.map((face, idx) =>
    idx === faceIdx
      ? face.map((c, i) => (i === 4 ? FACE_CENTER_COLOR[faceKeys[faceIdx]] : (i === cellIdx ? color : c)))
      : face
  )

export const checkCubeComplete = (state) =>
  state.every((face, faceIdx) =>
    face.every((color, i) =>
      color && (i !== 4 || color === FACE_CENTER_COLOR[faceKeys[faceIdx]])
    )
  )

export const buildCubeObject = (state) =>
  Object.fromEntries(faceKeys.map((k, i) => [k, state[i]]))
