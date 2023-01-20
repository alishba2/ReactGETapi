import React from 'react'
import { useState } from 'react'

export default function UseState() {
    
    const [count, setCount] = useState(0)

  return (
    <div>
        <p>Total counts: {count}</p>
        <button onClick={()=> setCount(count+1)}>Click me!</button>
    </div>
  )
}
