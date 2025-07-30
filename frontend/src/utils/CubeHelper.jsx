// CubeHelper.jsx
const faceKeys = ['U', 'R', 'F', 'D', 'L', 'B'];

export const FACE_CENTER_COLOR = {
  U: 'white',    
  D: 'yellow',  
  F: 'green',
  B: 'blue',
  L: 'orange',
  R: 'red',
};

export const initializeCubeState = () =>
  faceKeys.map(faceKey =>
    Array(9).fill(null).map((_, i) => (i === 4 ? FACE_CENTER_COLOR[faceKey] : null))
  );

export const paintCubeCell = (prevState, faceIdx, cellIdx, color) =>
  prevState.map((face, idx) =>
    idx === faceIdx
      ? face.map((c, i) => (i === 4 ? FACE_CENTER_COLOR[faceKeys[faceIdx]] : (i === cellIdx ? color : c)))
      : face
  );

export const checkCubeComplete = (state) =>
  state.every((face, faceIdx) =>
    face.every((color, i) =>
      color && (i !== 4 || color === FACE_CENTER_COLOR[faceKeys[faceIdx]])
    )
  );

export const buildCubeObject = (state) =>
  Object.fromEntries(faceKeys.map((k, i) => [k, state[i]]));

export const buildCubeString = (cubeObject) => {
  // Use standard Rubik's cube color mapping
  const colorMap = {
    'white': 'U',
    'red': 'R', 
    'green': 'F',
    'yellow': 'D',
    'orange': 'L',
    'blue': 'B',
  };

  return ['U', 'R', 'F', 'D', 'L', 'B']
    .map(face => {
      return cubeObject[face].map((color, i) => {
        if (!color) {
          throw new Error(`Unpainted cell at ${face}[${i}]`);
        }
        if (!(color in colorMap)) {
          throw new Error(`Unrecognized color: ${color} on face ${face}[${i}]`);
        }
        return colorMap[color];
      }).join('');
    }).join('');
};

export const buildCubeStringFromState = (cubeState) => {
  const cubeObject = buildCubeObject(cubeState);
  return buildCubeString(cubeObject);
};