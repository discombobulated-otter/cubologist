import {  useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import JEASINGS, { JEasing } from "jeasings";
import Cube from "./Cube"

function Rubik() {
    const ref = useRef();
    const rotationGroup = useRef();

    // Using useFrame to update the scene on screen using JEASINGS achieves animation.
    useFrame(() => {
        JEASINGS.update();
    });
    useEffect(() => {
        const handleKeyDown = (e) => {
            e.stopPropagation();
            // Forward rotation for back face
            if (e.key.toLowerCase() === "q") {
                rotate(ref.current, rotationGroup?.current, "x", -0.5, 1);
            }
            // Reverse rotation for back face
            if (e.key.toLowerCase() === "w") {
                rotate(ref.current, rotationGroup?.current, "x", -0.5, -1);
            }

            // Forward rotation for front face
            if (e.key.toLowerCase() === "e") {
                rotate(ref.current, rotationGroup?.current, "x", +0.5, 1);
            }
            // Reverse rotation for front face
            if (e.key.toLowerCase() === "r") {
                rotate(ref.current, rotationGroup?.current, "x", +0.5, -1);
            }
            // Forward rotation for left face
            if (e.key.toLowerCase() === "a") {
                rotate(ref.current, rotationGroup?.current, "y", -0.5, 1);
            }
            // Reverse rotation for left face
            if (e.key.toLowerCase() === "s") {
                rotate(ref.current, rotationGroup?.current, "y", -0.5, -1);
            }
            // Forward rotation for right face
            if (e.key.toLowerCase() === "d") {
                rotate(ref.current, rotationGroup?.current, "y", 0.5, 1);
            }
            if (e.key.toLowerCase() === "f") {
                rotate(ref.current, rotationGroup?.current, "y", 0.5, -1);
            }
            // Forward rotation for top face
            if (e.key.toLowerCase() === "z") {
                rotate(ref.current, rotationGroup?.current, "z", 0.5, 1);
            }
            if (e.key.toLowerCase() === "x") {
                rotate(ref.current, rotationGroup?.current, "z", 0.5, -1);
            }
            // Forward rotation for bottom face
            if (e.key.toLowerCase() === "c") {
                rotate(ref.current, rotationGroup?.current, "z", -0.5, 1);
            }
            if (e.key.toLowerCase() === "v") {
                rotate(ref.current, rotationGroup?.current, "z", -0.5, -1);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });
    return (
        <>
            <group ref={ref}>
                {[...Array(3).keys()].map((x) =>
                    [...Array(3).keys()].map((y) =>
                        [...Array(3).keys()].map((z) => (
                            <Cube
                                key={x + y * 3 + z * 9}
                                position={[x - 1, y - 1, z - 1]}
                            />
                        ))
                    )
                )}
            </group>
            <group ref={rotationGroup} />
        </>
    );
}

function attachToRotationGroup(cubeGroup, rotationGroup, axis, limit) {
    cubeGroup.children
        .slice()
        .reverse()
        .filter(function (c) {
            return limit < 0
                ? c.position[axis] < limit
                : limit == 0
                ? c.position[axis] == limit
                : c.position[axis] > limit;
        })
        .forEach(function (c) {
            rotationGroup.attach(c);
        });
}

// The resetCubeGroup function should just takes the boxes in rotation group and
// returns them back to the main group.

function resetCubeGroup(cubeGroup, rotationGroup) {
    rotationGroup.children
        .slice()
        .reverse()
        .forEach(function (c) {
            cubeGroup.attach(c);
        });
    rotationGroup.quaternion.set(0, 0, 0, 1);
}

// moveGroup just uses the animation library and rotates it by 90degress with a
// multiplier giving speed of rotation.

function moveGroup(rotationGroup, axis, multiplier) {
    new JEasing(rotationGroup.rotation)
        .to(
            {
                [axis]:
                    rotationGroup.rotation[axis] + (Math.PI / 2) * multiplier,
            },
            250
        )
        .easing(JEASINGS.Cubic.InOut)
        .start();
}

// This is the main function for controls when no animation is on it resets the
// rotation group, attaches new faces to the rotation group and calls
// move function.

function rotate(cubeGroup, rotationGroup, axis, limit, multiplier) {
    if (!JEASINGS.getLength()) {
        resetCubeGroup(cubeGroup, rotationGroup);
        attachToRotationGroup(cubeGroup, rotationGroup, axis, limit);
        moveGroup(rotationGroup, axis, multiplier);
    }
}


export default Rubik;