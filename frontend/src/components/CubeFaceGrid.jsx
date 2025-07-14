import React from "react";
import "./CubeFaceGrid.css";

// Standard color for each face center
const FACE_CENTER_COLOR = {
    U: "yellow",   // Up
    D: "white",    // Down
    F: "green",    // Front
    B: "blue",     // Back
    L: "orange",   // Left
    R: "red",      // Right
};

const COLOR_HEX = {
    white: "#FFFFFF",
    yellow: "#FFD500",
    red: "#C41E3A",
    orange: "#FF5800",
    green: "#009E60",
    blue: "#0057A6",
};

// Props:
// - faceData: array of 9 color names (strings or null)
// - onPaint: function(index) called when a cell is clicked
// - faceKey: one of 'U', 'D', 'F', 'B', 'L', 'R'
const CubeFaceGrid = ({ faceData, onPaint, faceKey }) => {
    return (
        <div className="cube-face-grid">
            {faceData.map((color, idx) => {
                // Center cell (index 4) always uses the standard color
                const isCenter = idx === 4;
                const displayColor = isCenter
                    ? FACE_CENTER_COLOR[faceKey]
                    : color;
                return (
                    <button
                        key={idx}
                        className="cube-face-cell"
                        style={{ backgroundColor: COLOR_HEX[displayColor] || "#e5e7eb" }}
                        onClick={() => !isCenter && onPaint(idx)}
                        tabIndex={isCenter ? -1 : 0}
                        aria-label={isCenter ? `${faceKey} center` : `cell ${idx}`}
                        disabled={isCenter}
                    />
                );
            })}
        </div>
    );
};

export default CubeFaceGrid;
