const FaqCard = ({question, showAnswer}) => {
    const {ques, ans} = question;
    const { currentShowAnswer, changeCurrentExpand, index} = showAnswer;

    return (
        <div className="p-4 bg-slate-300 text-blue-900 w-2/4 mx-auto cursor-pointer" onClick={changeCurrentExpand}>
            <h1 className="text-xl font-bold flex justify-between underline underline-offset-4">
                {ques}
                <span>&gt;</span>
            </h1>
            {
                (currentShowAnswer == index) ? <p>{ans}</p> : null
            }        
        </div>
    )
}

export default FaqCard;