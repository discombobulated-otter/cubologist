import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// Cube faces and their display names
const faces = [
    { key: "U", name: "White" },
    { key: "R", name: "Red" },
    { key: "F", name: "Green" },
    { key: "D", name: "Yellow" },
    { key: "L", name: "Orange" },
    { key: "B", name: "Blue" },
];

export default function FaceNavigator({ currentFace, setCurrentFace }) {
    const handlePrev = () => {
        setCurrentFace((prev) => (prev - 1 + faces.length) % faces.length);
    };

    const handleNext = () => {
        setCurrentFace((prev) => (prev + 1) % faces.length);
    };

    return (
        <div className="flex flex-col items-center m-0 justify-center p-10">
            <div className="flex w-full justify-between items-center">
                <FaArrowAltCircleLeft
                    className="text-4xl scale-150 cursor-pointer"
                    onClick={handlePrev}
                    aria-label="Previous Face"
                />

                <span className="text-2xl font-bold mx-20 min-w-[100px] text-center">
                    {faces[currentFace].name}
                </span>

                <FaArrowAltCircleRight
                    className="text-4xl scale-150 cursor-pointer"
                    onClick={handleNext}
                    aria-label="Next Face"
                />
            </div>
        </div>
    );
}
