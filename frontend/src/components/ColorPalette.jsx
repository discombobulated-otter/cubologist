import React from "react";


const COLORS = [
    { name: "white", hex: "#FFFFFF" },
    { name: "yellow", hex: "#FFD500" },
    { name: "red", hex: "#D50000" },
    { name: "orange", hex: "#FF7043" },
    { name: "green", hex: "#00E676" },
    { name: "blue", hex: "#448AFF" },
];


export default function ColorPalette({ selected, onSelect }) {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-4 ">
            {COLORS.map((color) => (
                <button
                    key={color.name}
                    onClick={() => onSelect(color.name)}
                    className={`w-12 h-12 rounded-full border-4  transition-all duration-150
                        ${selected === color.name ? "border-x-indigo-900 scale-110" : "border-transparent"}
                        focus:outline-none`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                />
            ))}
        </div>
    );
}
