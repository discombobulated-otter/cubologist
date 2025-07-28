import Scrambo from "scrambo";
import { useState } from "react";
import Stopwatch from "./Stopwatch";

function Scrambler() {
    const scrambler = new Scrambo();
    const [scramble, setScramble] = useState(scrambler.type("333").get()[0]);

    const generateScramble = () => {
        setScramble(scrambler.type("333").get()[0]);
    };
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center h-16">
                <button
                    className="text-3xl mt-20 font-bold uppercase tracking-wide bg-[#CF9814] bg-clip-text text-transparent"
                    onClick={generateScramble}
                >
                    Scramble
                </button>
                <label
                    for="message"
                    class="block mt-6 text-4xl font-large text-gray-900 font-bold  dark:text-white"
                >
                    {scramble}
                </label>
            </div>
            <div className="relative min-h-screen">
                <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Stopwatch />
                    
                </div>
            </div>
        </div>
    );
}
export default Scrambler;
