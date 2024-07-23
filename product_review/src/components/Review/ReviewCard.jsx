const ReviewCard = ({user}) => {
    const { 
        name, 
        picture , 
        post , 
        review, 
        changeUser, 
        currentUser } = user ;
   
    return <div className="w-full shrink-0 py-8 px-6 hover:shadow-md hover:shadow-slate-600 transition duration-300 flex justify-center flex-col items-center bg-slate-700 rounded-md ">
        <div className="w-32 h-32 relative after:h-full after:w-full after:bg-blue-500 after:absolute z-0 after:-top-2 after:-right-3 after:rounded-[50%] after:-z-10">
            <img src={picture.large} alt="user pic" className="object-cover h-full w-full rounded-[50%] " />
        </div>
        <div className="my-4">
            <h2 className="text-center text-2xl text-slate-300">{name.title + " " + name.first + " " + name.last }</h2>
            <h5 className="text-center text-md text-blue-300">
                {post }
            </h5>
        </div>
            <p className="text-center text-slate-300 text-wrap">
                {review }
            </p>
        <div>
            <div className="flex justify-center gap-8">
                <button className="text-4xl my-3 text-white transition duration-300 hover:text-violet-400"
                onClick={ () => {
                    console.log('prev user')
                    const user = currentUser == 0 ? 3 : currentUser - 1;
                    changeUser(user )
                }}
                >&lt;</button>
                <button className="text-4xl my-3 text-white transition duration-300 hover:text-violet-400"
                onClick={() => {
                    console.log('next user')
                    const user = currentUser == 3 ? 0 : currentUser + 1;
                    changeUser(user )
                }}
                >&gt;</button>
            </div>
            <button className="hover:bg-blue-500 py-2 px-4 rounded-md  bg-slate-950 hover:text-slate-300 text-blue-400 transition" 
            onClick={ () => {
                console.log('btn click')
                const randomUser = Math.floor(Math.random() * 3);
                changeUser(randomUser)
            }}
            >Surprice Me</button>
        </div>
    </div>
}

export default ReviewCard;