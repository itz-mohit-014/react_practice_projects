const Content = ({details}) => {
    const {title,  tag, duration, listItems} = details;
    return ( 
        <div className="bg-slate-300 text-blue-900 p-4 ml-4">
            <h1 className="text-4xl ">{title}</h1>
            <h3 className="bg-slate-500 w-max p-2 text-slate-300 rounded my-1">{tag}</h3>
            <h5 className="text-slate-500 mb-4">{duration}</h5>
            <ul>
                {
                    listItems.map((list, index) => <li key={index} className=""> <span className="text-2xl text-blue-700 font-bold">&gt;&gt;</span> {list}</li>)
                }
                
            </ul>
        </div>
        
    )
}

export default Content;