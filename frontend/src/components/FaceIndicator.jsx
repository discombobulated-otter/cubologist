const FaceIndicator = ({ direction, faceKey, color }) => {
    const baseStyle = "absolute shadow";

    const directionStyle = {
        top: "top-[-32px] left-1/2 -translate-x-1/2 w-12 h-4",
        bottom: "bottom-[-32px] left-1/2 -translate-x-1/2 w-12 h-4",
        left: "left-[-32px] top-1/2 -translate-y-1/2 w-4 h-12",
        right: "right-[-32px] top-1/2 -translate-y-1/2 w-4 h-12",
    };

    return (
        <div
            className={`${baseStyle} ${directionStyle[direction]}`}
            style={{ backgroundColor: color }}
            title={faceKey}
        />
    );
};

export default FaceIndicator;
