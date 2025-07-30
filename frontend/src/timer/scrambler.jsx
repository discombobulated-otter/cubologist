import { useState } from "react";
import Scrambo from "scrambo";
import Stopwatch from "./Stopwatch";

function Scrambler() {
    const scrambler = new Scrambo();
    const [scramble, setScramble] = useState(scrambler.type("333").get()[0]);

    const generateScramble = () => {
        setScramble(scrambler.type("333").get()[0]);
    };

    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center mt-15 h-auto hover:text-[#F1AD00] backdrop-blur-sm px-4 py-6 rounded-xl shadow-md">
                <button
                    className="text-3xl font-bold uppercase tracking-wide bg-[#F1AD00] bg-clip-text text-transparent"
                    onClick={generateScramble}
                >
                    Scramble
                </button>
                <label className="block mt-6 text-4xl font-bold text-gray-900  dark:text-white">
                    {scramble}
                </label>
            </div>
           <div className="flex-grow flex justify-center items-end mt-50">
                    <Stopwatch generateScramble={generateScramble} />
                </div>
            </div>
        // </div>
    );
}

export default Scrambler;
