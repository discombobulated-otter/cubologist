import React from "react";

// Cube faces and their display names
const faces = [
    { key: "U", name: "Up (U)" },
    { key: "R", name: "Right (R)" },
    { key: "F", name: "Front (F)" },
    { key: "D", name: "Down (D)" },
    { key: "L", name: "Left (L)" },
    { key: "B", name: "Back (B)" },
];

export default function FaceNavigator({ currentFace, setCurrentFace }) {
    const handlePrev = () => {
        setCurrentFace((prev) => (prev - 1 + faces.length) % faces.length);
    };

    const handleNext = () => {
        setCurrentFace((prev) => (prev + 1) % faces.length);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4 p-4">
            <div className="flex w-full justify-between items-center">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow"
                    onClick={handlePrev}
                >
                    Previous Face
                </button>
                <span className="text-lg font-semibold mx-4">
                    {faces[currentFace].name}
                </span>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow"
                    onClick={handleNext}
                >
                    Next Face
                </button>
            </div>
        </div>
    );
}
