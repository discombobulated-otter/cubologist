import { Canvas } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";
import Rubik from "./Rubik";

// for reference :  this should be the format bizz  UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB


function Voxel() {
    const controls = [
        { label: "U", key: "f" },
        { label: "R", key: "r" },
        { label: "F", key: "x" },
        { label: "D", key: "a" },
        { label: "L", key: "q" },
        { label: "B", key: "v" },
    ];

    const primes = [
        { label: "U'", key: "d" },
        { label: "R'", key: "e" },
        { label: "F'", key: "z" },
        { label: "D'", key: "s" },
        { label: "L'", key: "w" },
        { label: "B'", key: "c" },
    ];

    return (
        <div className="h-full w-full flex bg-[#030712]  text-white select-none">
            {/* LEFT NOTATION CONTROLS */}
            <div className="flex flex-col items-center justify-center mt-20 p-4 gap-3">
                {controls.map(({ label, key }) => (
                    <button
                        key={label}
                        className="bg-blue-700 hover:bg-blue-500 px-4 py-2 m-5 rounded"
                        onClick={() =>
                            window.dispatchEvent(
                                new KeyboardEvent("keydown", { key })
                            )
                        }
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* CUBE RENDER CANVAS */}
            <div className="flex-1 flex justify-center items-center">
                <Canvas shadows camera={{ position: [4, 5, 6], fov: 50 }}>
                    <TrackballControls
                        rotateSpeed={3}
                        zoomSpeed={1.2}
                        panSpeed={0.8}
                        noZoom
                    />

                    <ambientLight intensity={0.75} />
                    <pointLight position={[10, 10, 10]} />
                    <Rubik />
                </Canvas>
            </div>

            {/* RIGHT PRIME CONTROLS */}
            <div className="flex flex-col items-center justify-center mt-20 p-4 gap-3">
                {primes.map(({ label, key }) => (
                    <button
                        key={label}
                        className="bg-red-700 hover:bg-red-500 m-5 px-4 py-2 rounded"
                        onClick={() =>
                            window.dispatchEvent(
                                new KeyboardEvent("keydown", { key })
                            )
                        }
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Voxel;
