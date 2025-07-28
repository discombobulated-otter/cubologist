import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Rubik from "./Rubik"; 




function Voxel() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-[#030712]">
            <Canvas shadows camera={{ position: [6, 6, 6], fov: 53 }}>
                <OrbitControls
                    enableDamping={true}
                    dampingFactor={0.5} // range: 0 (no damping) to ~0.25 (high damping)
                    rotateSpeed={0.75} // reduce for smoother rotation
                    zoomSpeed={0.5} // reduce for smoother zoom
                    panSpeed={0.5} // reduce for smoother panning
                />
                <ambientLight intensity={0.75} />
                <pointLight position={[10, 10, 10]} />
                <Rubik />
            </Canvas>
        </div>
    );
}

export default Voxel;