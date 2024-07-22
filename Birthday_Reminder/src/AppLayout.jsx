import { useEffect, useState } from 'react'
import BirthdayPerson from './components/BirthdayPerson.jsx'

function AppLayout() {
  const [personData, setPersonData] = useState([]);
  const fetchData = async () => {
    const res = await fetch('https://randomuser.me/api/?results=5');
    const data = await res.json();
    console.log(data.results)
    setPersonData(data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='bg-blue-500 p-4 flex flex-col gap-2 items-center rounded-lg shadow-sm'>
            <h1 className="text-center text-2xl font-bold" >{personData.length} BirthDay Today</h1>
            <ul className='w-full p-4 flex flex-col gap-2'>
              {personData.length == 0 ? <li>0 Person Found</li> :
              personData.map((person)=> <BirthdayPerson key={person.id.value} person={person}/>)}
                
            </ul>    
            <button className="bg-orange-400 text-xl font-bold w-full rounded-lg py-2 active:scale-95" onClick={()=>{
              setPersonData([])
            }}>All Clear</button>  
        </div>
      </div>
    </>
  )
}

export default AppLayout
