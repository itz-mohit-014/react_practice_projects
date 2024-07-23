import { useEffect, useState } from "react"
import ReviewCard from "./ReviewCard"
import Loading from "../Loading/Loading";
import userReviewData from  "../userReviewData.js"

function ReviewContainer() {
    const [userData, setUserData] = useState([]);
    let [currentUser , setCurrentuser] = useState(0)
    const userReview = userReviewData;

    const fetchUser = async() => {
        const res = await fetch('https://randomuser.me/api/?results=4');
        const data = await res.json();
        setUserData(data.results);
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className=" w-full sm:w-2/3 sm:max-w-2xl my-2 sm:mx-auto p-4 flex gap-4 overflow-auto">
           {userData.length == 0 ? <Loading /> : 
                 userData.map((user, index) => {
   
                   return <ReviewCard key={user.id.value || user.login.md5} 
                   user={ {
                    ...user,
                    ...userReview[index],
                    changeUser:function(num) {
                        setCurrentuser(num)
                    },
                    currentUser
                }}
                /> 
            }).filter((_, i) => i == currentUser )

           }
        </div>
        
    )
}

export default ReviewContainer
  