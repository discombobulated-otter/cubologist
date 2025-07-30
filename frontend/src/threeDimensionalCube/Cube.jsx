
const COLOR_HEX = {
    white: "#FFFFFF",
    yellow: "#FFD500",
    red: "#D50000",
    orange: "#FF7043",
    green: "#00E676",
    blue: "#448AFF",
};


function Cube({ position }) {
    const [x, y, z] = position;

    const materials = [
        x === 1 ? COLOR_HEX.red : "#111",       // Right
        x === -1 ? COLOR_HEX.orange : "#111",   // Left
        y === 1 ? COLOR_HEX.white : "#111",    // Top
        y === -1 ? COLOR_HEX.yellow : "#111",    // Bottom
        z === 1 ? COLOR_HEX.green : "#111",   // Front
        z === -1 ? COLOR_HEX.blue : "#111",   // Back 
    ];

    return (
        <mesh position={position}>
            <boxGeometry args={[0.95, 0.95, 0.95]} />
            {materials.map((color, i) => (
                <meshStandardMaterial
                    key={i}
                    attach={`material-${i}`}
                    color={color}
                />
            ))}
        </mesh>
    );
}
export default Cube;