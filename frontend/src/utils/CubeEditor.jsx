import { useState, useEffect } from "react";
import Cube from "cubejs";

import ColorPalette from "./../components/ColorPalette";
import CubeFaceGrid from "./../components/CubeFaceGrid";
import SubmitButton from "./../components/SubmitButton";
import FaceNavigator from "./../components/FaceNavigator";

import {
    initializeCubeState,
    paintCubeCell,
    checkCubeComplete,
    buildCubeObject,
    buildCubeString,
} from "./CubeHelper";

import validateCube from "./ValidateCube";

const faceKeys = ["U", "R", "F", "D", "L", "B"];

function CubeEditor() {
    const [selectedColor, setSelectedColor] = useState("white");
    const [cubeState, setCubeState] = useState(initializeCubeState);
    const [currentFace, setCurrentFace] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState({ valid: false, errors: [] });

    useEffect(() => {
        if (!checkCubeComplete(cubeState)) {
            setValidation({ valid: false, errors: ["Cube is incomplete."] });
            return;
        }

        const result = validateCube(buildCubeObject(cubeState));
        setValidation(result || { valid: false, errors: [] });
    }, [cubeState]);

    useEffect(() => {
        Cube.initSolver();
    }, []);

    const handlePaint = (cellIdx) => {
        if (cellIdx === 4) return;
        setCubeState((prev) =>
            paintCubeCell(prev, currentFace, cellIdx, selectedColor)
        );
    };

    const handleSubmit = () => {
        if (!checkCubeComplete(cubeState)) {
            alert("Cube is incomplete. Please fill all cells.");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (!validation.valid) {
                alert("Cube is invalid: " + validation.errors.join("\n"));
            } else {
                const cubeObject = buildCubeObject(cubeState);
                const kociembaString = buildCubeString(cubeObject);
                console.log("Kociemba String:", kociembaString);

                try {
                    const cube = Cube.fromString(kociembaString);
                    const solution = cube.solve(); // Already returns a space-separated string
                    alert("Solution: " + solution);
                } catch (error) {
                    alert("Error solving cube: " + error.message);
                }
            }
        }, 1000);
    };

    const isCubeInputComplete = checkCubeComplete(cubeState);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-6 p-8 bg-[#030712] text-white select-none">
            <ColorPalette
                selected={selectedColor}
                onSelect={setSelectedColor}
            />

            <div className="text-2xl font-bold text-center mb-4">
                Current Face: {faceKeys[currentFace]}
            </div>

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

            <div>
                <SubmitButton
                    onSubmit={handleSubmit}
                    isLoading={isLoading}
                    isCubeInputComplete={
                        isCubeInputComplete && validation.valid
                    }
                />

                {validation.errors.length > 0 && !validation.valid && (
                    <div className="text-red-500 text-sm mt-2">
                        {validation.errors.map((err, i) => (
                            <div key={i}>{err}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CubeEditor;
