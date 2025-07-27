// utils/CubeHelper.jsx
const faceKeys = ['U', 'R', 'F', 'D', 'L', 'B'];

export const FACE_CENTER_COLOR = {
  U: 'yellow',
  D: 'white',
  F: 'green',
  B: 'blue',
  L: 'orange',
  R: 'red',
};

export const initializeCubeState = () =>
  faceKeys.map(faceKey =>
    Array(9).fill(null).map((_, i) => (i === 4 ? FACE_CENTER_COLOR[faceKey] : '#030712'))
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
  const colorMap = {
    [cubeObject.U[4]]: 'U',
    [cubeObject.R[4]]: 'R',
    [cubeObject.F[4]]: 'F',
    [cubeObject.D[4]]: 'D',
    [cubeObject.L[4]]: 'L',
    [cubeObject.B[4]]: 'B',
  };

  return faceKeys
    .map(face =>
      cubeObject[face]
        .map(color => {
          if (!(color in colorMap)) {
            throw new Error(`Unrecognized color: ${color} at face ${face}`);
          }
          return colorMap[color];
        })
        .join('')
    )
    .join('');
};

export const buildCubeStringFromState = (cubeState) => {
  const cubeObject = buildCubeObject(cubeState);
  return buildCubeString(cubeObject);
};
