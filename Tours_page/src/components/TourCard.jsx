import { useEffect, useState } from "react";

const TourCard = ({ data }) => {
  const { name, details, banner, price } = data.item;
  const [readMoreToggle, setReadMoreToggle] = useState(false);
  const [tourDetails, setTourDetails] = useState(details);

  const collapsText = () => {
    if (readMoreToggle === "Read More!") {
      setTourDetails(details);
      setReadMoreToggle("Show less");
    } else {
      const text = `${details.substring(0, 200)}...`;
      setTourDetails(text);
      setReadMoreToggle("Read More!");
    }
  };

  useEffect(() => {
    collapsText();
  }, []);

  return (
    <div className="group border-[1px] border-gray-500 flex flex-col rounded-md overflow-hidden hover:shadow-sm hover:shadow-slate-400 transition-shadow relative">
      <div className="h-72 w-full overflow-hidden ">
        <img
          src={banner}
          alt=" tour img"
          className="object-cover h-full w-full group-hover:scale-105 transition "
        />
        <p className="bg-green-500 text-white absolute top-0 right-0 py-2 px-4">{(price === 'Free' || price === 0) ? 0 :  `$${price}`} </p>
      </div>
      <div className="p-4">
        <h3 className="text-center text-xl mb-4">{name}</h3>
        <p className="text-gray-400">
          {tourDetails}
          <span
            className="text-green-400 ml-2 transition cursor-pointer hover:underline underline-offset-4"
            onClick={() => {
              collapsText(true);
            }}
          >
            {readMoreToggle}
          </span>
        </p>
        <button
          className="border-2 rounded-md border-green-400 w-full my-4 text-green-50 py-1 hover:bg-green-600 hover:text-white transition-all active:scale-95"
          onClick={data.updateCard}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
export default TourCard;
