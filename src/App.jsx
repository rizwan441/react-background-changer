import { useState } from "react"

export default function App() {
  const[color,setColor]= useState('olive')
  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-3 inset-x-0" style={{width:"100%"}}>
        <div className="flex flex-row flex-wrap justify-center bg-white shadow-lg py-2 px-3 rounded-xl gap-4">
          <button onClick={()=>setColor('red')} className="outline-none px-4 py-2 text-white rounded-full shadow-xl" style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('green')} className="outline-none px-4 py-2 text-white rounded-full shadow-xl" style={{backgroundColor:'green'}}>green</button>
          <button onClick={()=>setColor('blue')} className="outline-none px-4 py-2 text-white rounded-full shadow-xl" style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={()=>setColor('orange')} className="outline-none px-4 py-2 text-white rounded-full shadow-xl" style={{backgroundColor:'orange'}}>Orange</button>
          <button onClick={()=>setColor('yellow')} className="outline-none px-4 py-2 text-white rounded-full shadow-xl" style={{backgroundColor:'yellow'}}>Yellow</button>
        </div>
      </div>
      

    </div>
  )
}