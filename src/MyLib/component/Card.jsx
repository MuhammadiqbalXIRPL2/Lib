import { useState } from "react";

const Card = ({ text, title, stateIni }) => {

  const [batu, setBatu] = useState(stateIni)

  const increment = () => {
    setBatu(batu - 1)
  }

  return (
    <>
      <div className="flex item-center rounded-lg w-full sm:w-auto p-4 h-32">
        <div className="flex items-start ml-12 mt-4">
          <div className="rounded-lg shadow-lg bg-white p-4 sm:w-ful sm:h-full w-full h-full">
            <p className="text-black text-sm md:text-m font-semibold">
              {title}
            </p>
              <p className="text-black text-sm md:text-m font-semibold"> 
                {text}
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={increment}>{batu}</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;
