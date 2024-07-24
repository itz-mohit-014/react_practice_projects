import { useState } from "react";
import data from "./paraData";
const CustomPara = () => {
    const [inputVaue, setInputValue] = useState(1);
    const [generateParaValue, setGenerateParaValue] = useState(inputVaue)
    
    return (
        <section className="p-4 max-w-[700px] mx-auto">
            <h1 className="text-center p-4 text-3xl text-slate-300">TIRED OF BORING LOREM IPSUM?</h1>
            <div className="text-center text-xl">
                <span className="text-2xl text-blue-500"> Paragraphs:</span>
                <input className="mx-4 border-2 outline-none bg-transparent p-2" type="number" min={1} max={10} value={inputVaue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={(e) => {
                    setGenerateParaValue(inputVaue);
                }} className="bg-green-600 py-2 px-4 rounded text-slate-200 shadow-lg">Generate</button>
            </div>
            <div className="border-2 p-8 mt-8 ">
                {
                   data.slice(0, generateParaValue).map(para => <p className="mb-2 text-lg" key={para.length}>{para}</p>)
                }
            </div>
        </section>
    )
}

export default CustomPara;