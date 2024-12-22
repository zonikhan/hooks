"use client"
import { useState } from 'react'
// import { BiColor } from 'react-icons/bi';

function Home() {
  const colors = ["Black","Indigo","Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown"];
  const [selectedColor, setSelectedColor] = useState("") 
return (
    <div className={`justify-center h-screen min-h-screen flex flex-col items-center`}
    style={{backgroundColor: selectedColor }}>
       <h1 className="text-2xl font-bold mb-6 text-black">
          Click a color to change the background
      </h1>
      <div className='flex flex-wrap justify-center gap-4 '>
        {colors.map((color) => (
          <button
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`px-4 py-2 text-white rounded justify-items-center grid place-items-center`}
          style={{ backgroundColor:color }}
          >
            {color}
          </button>
        ))}
      </div>
      
    </div>
  )
}

export default Home;
