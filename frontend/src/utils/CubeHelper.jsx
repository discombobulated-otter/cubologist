
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

export const buildCubeString = (cubeObject) => {
  // Build color map dynamically from center pieces (index 4 of each face)
  const colorMap = {
    [cubeObject.U[4]]: 'U',  // Center of U face
    [cubeObject.R[4]]: 'R',  // Center of R face  
    [cubeObject.F[4]]: 'F',  // Center of F face
    [cubeObject.D[4]]: 'D',  // Center of D face
    [cubeObject.L[4]]: 'L',  // Center of L face
    [cubeObject.B[4]]: 'B',  // Center of B face
  };

  return ['U', 'R', 'F', 'D', 'L', 'B']
    .map(face => cubeObject[face]
      .map(color => {  
        if (!(color in colorMap)) {
          throw new Error(`Unrecognized color: ${color}`);
        }
        return colorMap[color];
      }).join('')
    ).join('');
};

// Alternative version that accepts cubeState array directly
export const buildCubeStringFromState = (cubeState) => {
  const cubeObject = buildCubeObject(cubeState);
  return buildCubeString(cubeObject);
};
// format should be "UUUUUUUUURRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB"