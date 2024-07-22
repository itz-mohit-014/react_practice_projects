const BirthdayPerson = ({person}) => {
    const fullName = person.name.first + person.name.last;
    return (
        <li className="list-none flex gap-4 w-full m-auto bg-orange-400 rounded-lg p-2 px-4">
            <img src={person.picture.medium} alt="user" className=" rounded-full border-2 border-solid border-black" />
            <div className="right">
            <h3 className="text-xl font-bold mt-2">{fullName}</h3>
            <p className="text-sm text-slate-200 ">{person.dob.age} years</p>
            </div>
        </li>   
    )
}


export default BirthdayPerson;