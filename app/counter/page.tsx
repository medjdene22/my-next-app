'use client'
import { useState } from "react";

export default function Counter() {
  const [count,setCount] = useState(0);

  return (
    <div className="flex">
      <button className="btn btn-accent btn-outline w-24 mt-3 mr-8 " onClick={() => setCount(count+1)}>increase</button>
      <h1 className="text-7xl font-bold ">{count}</h1>      
    </div>
  )
}
