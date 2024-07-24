import { useState } from "react";
import data from "./data";
import FaqCard from "./faqs";

function AccordianCotainer() {
    const [currentShowAnswer , setCurrentShowAnswer] = useState(0)
  return (
    <>  <h1 className="text-6xl text-slate-600 bg-white p-6 text-center font-bold">Questions</h1>
        <div className="bg-red-500 gap-4 grid grid-cols-1 p-8 m-4"> 
            {data.map((question, index) => <FaqCard question= { question } showAnswer={{
                 changeCurrentExpand:function(){
                    currentShowAnswer != index ? 
                    setCurrentShowAnswer(index) :
                    setCurrentShowAnswer(null) ;
                },
                currentShowAnswer,
                index
            }} key={question.id}/>)}
        </div>        
    </>
  )
}

export default AccordianCotainer;
