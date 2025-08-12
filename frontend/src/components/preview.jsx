import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import { Canvas } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";
import Rubik from "../threeDimensionalCube/Rubik";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Preview = ({ open, onClose }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={onClose}
                aria-describedby="solution-dialog-description"
                PaperProps={{
                    sx: {
                        backgroundColor: "rgb(30, 29, 29)",
                        color: "#CCCCCC",
                        borderRadius: 2,
                        width: 400,
                        height: 400,
                    },
                }}
            >
                <DialogTitle>Preview</DialogTitle>

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
                <button>
                    <FaArrowAltCircleLeft />
                </button>
                <span></span>
                <button>
                    <FaArrowAltCircleRight />
                </button>
            </Dialog>
        
            {/* <Preview open={showPreview} onClose={() => setShowPreview(false)} /> */}
  
        </div>
        
    );
};

export default Preview;
