import {useRouteError} from "react-router-dom"

const NotFound = () => {
const error = useRouteError();
console.log(error)  
return (
    <section className="w-full flex justify-center flex-col items-center h-screen">
        <h1 className="text-4xl text-green-400 mb-8">Oops... Something Went Wrong.</h1>
        <h2 className="text-2xl text-white"> {error.status} {error.statusText}</h2>
    </section>
)



}

export default NotFound;