import { useState } from "react";
import cardData from "../dummyData.js"
import ProductCard from "./Card.jsx"

function CardContainer() {
    const [categoryCardView, setCategoryCardView] = useState(cardData)
    const filterCard = (value) => {
        const updateCard = cardData.filter((card) => card.category == value)
        setCategoryCardView(updateCard);
    }
    return (
        <>
        <div className="w-max my-8 mx-auto gap-4 flex ">
            <button className="bg-red-500 p-4 text-slate-300 px-8 text-2xl font-bold active:scale-95" onClick={() => setCategoryCardView(cardData)}>All</button>
            <button className="bg-red-500 p-4 text-slate-300 px-8 text-2xl font-bold active:scale-95" onClick={() => filterCard("Breakfast") }>BreakFast</button>
            <button className="bg-red-500 p-4 text-slate-300 px-8 text-2xl font-bold active:scale-95" onClick={() => filterCard("Lunch") }>Lunch</button>
            <button className="bg-red-500 p-4 text-slate-300 px-8 text-2xl font-bold active:scale-95" onClick={() => filterCard("Shakes") }>Shakes</button>
        </div>
      <div className="grid grid-cols-3 gap-4 p-8 mx-auto w-2/3">
        {
            categoryCardView.map((card) => <ProductCard cardDetails={card} />)
        }
      </div>
        </>
    )
  }
  
  export default CardContainer;
  