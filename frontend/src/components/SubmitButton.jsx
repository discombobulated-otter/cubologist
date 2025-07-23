import React from "react";

export default function SubmitButton({ onSubmit, isLoading, isCubeInputComplete }) {
    return (
        <button
            onClick={onSubmit}
            disabled={!isCubeInputComplete || isLoading}
            style={{
                padding: "0.5em 1.5em",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "none",
                background: isLoading ? "#ccc" : "#CB010F",
                color: "#fff",
                cursor: (!isCubeInputComplete || isLoading) ? "not-allowed" : "pointer",
                transition: "background 0.2s",
                width: "200px",
                margin: "0 auto",
            }}
            onMouseOver={e => {
                if (!isLoading && isCubeInputComplete) {
                    e.currentTarget.style.background = "#0056b3";
                }
            }}
            onMouseOut={e => {
                if (!isLoading && isCubeInputComplete) {
                    e.currentTarget.style.background = "#CB010F";
                }
            }}
        >
            {isLoading ? (
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <span
                        style={{
                            width: "18px",
                            height: "18px",
                            border: "2px solid #fff",
                            borderTop: "2px solid #007bff",
                            borderRadius: "50%",
                            marginRight: "8px",
                            animation: "spin 1s linear infinite",
                            display: "inline-block",
                        }}
                    />
                    Loading...
                </span>
            ) : (
                    "Solve"
            )}
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg);}
                        100% { transform: rotate(360deg);}
                    }
                `}
            </style>
        </button>
    );
}
