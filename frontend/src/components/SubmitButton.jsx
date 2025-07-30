import React from "react";

export default function SubmitButton({ onSubmit, isLoading, isCubeInputComplete }) {
    return (
        <div className="flex flex-col ml-2 mt-0 justify-center items-center ">

        <button
            onClick={onSubmit}
            disabled={!isCubeInputComplete || isLoading}
            className={`px-2 py-2 w-48 text-white font-semibold rounded-md shadow-sm ${
                isLoading ? "bg-gray-300" : "bg-red-600 hover:bg-red-700"
            } ${
                !isCubeInputComplete || isLoading ? "cursor-not-allowed" : "cursor-pointer"
            } transition duration-150 ease-in-out`}
            >
            {isLoading ? (
                <span className="flex items-center">
                    <span
                        className="w-4 h-4 border-2 border-white border-t-blue-600 rounded-full mr-2 animate-spin"
                        />
                    Loading...
                </span>
            ) : (
                "Solve"
            )}
        </button>
    </div>
    );
}

