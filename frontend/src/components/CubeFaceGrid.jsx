import React from "react";
import FaceIndicator from "./FaceIndicator"; // adjust path if necessary

const FACE_CENTER_COLOR = {
    U: "white",
    D: "yellow",
    F: "green",
    B: "blue",
    L: "orange",
    R: "red",
};

const ADJACENT_FACE_MAP = {
    F: { top: 'U', right: 'R', bottom: 'D', left: 'L' },
    B: { top: 'U', right: 'L', bottom: 'D', left: 'R' },
    U: { top: 'B', right: 'R', bottom: 'F', left: 'L' },
    D: { top: 'F', right: 'R', bottom: 'B', left: 'L' },
    L: { top: 'U', right: 'F', bottom: 'D', left: 'B' },
    R: { top: 'U', right: 'B', bottom: 'D', left: 'F' },
};

const COLOR_HEX = {
    white: "#FFFFFF",
    yellow: "#FFD500",
    red: "	#D50000",
    orange: "#FF7043",
    green: "#00E676",
    blue: "	#448AFF",
};

const CubeFaceGrid = ({ faceData, onPaint, faceKey }) => {
    return (
        <div className="relative w-fit mx-auto">
            {/* Direction indicators */}
            {['top', 'right', 'bottom', 'left'].map((dir) => (
                <FaceIndicator
                    key={dir}
                    direction={dir}
                    faceKey={ADJACENT_FACE_MAP[faceKey][dir]}
                    color={COLOR_HEX[FACE_CENTER_COLOR[ADJACENT_FACE_MAP[faceKey][dir]]]}
                />
            ))}

            {/* 3x3 Cube Face */}
            <div className="grid grid-cols-3 grid-rows-3 gap-[5px] max-w-[200px] w-max aspect-square mx-auto box-shadow: 0 0 2px #fff2">
                {faceData.map((color, idx) => {
                    const isCenter = idx === 4;
                    const displayColor = isCenter
                        ? FACE_CENTER_COLOR[faceKey]
                        : color;
                    return (
                        <button
                            key={idx}
                            className={`
                                w-full aspect-square border border-black
                                flex items-center justify-center transition duration-150
                                cursor-pointer outline-none
                                hover:shadow-[0_0_0_2px_#2563eb]
                                hover:border-[#2563eb]
                                focus:shadow-[0_0_0_2px_#2563eb]
                                focus:border-[#2563eb]
                                min-w-[60px] min-h-[60px] text-xl rounded-2xl
                                ${isCenter ? 'cursor-default' : ''}
                            `}
                            style={{ backgroundColor: COLOR_HEX[displayColor] || "#2D3035" }}
                            onClick={() => !isCenter && onPaint(idx)}
                            tabIndex={isCenter ? -1 : 0}
                            aria-label={isCenter ? `${faceKey} center` : `cell ${idx}`}
                            disabled={isCenter}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CubeFaceGrid;
