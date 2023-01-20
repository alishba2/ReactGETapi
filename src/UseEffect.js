import React, { useEffect,useState } from 'react'

export default function UseEffect() {
    const [count , setCount] = useState(0 );

    useEffect(()=>{
        document.title =  ` ${count} `;
    })
  return (
    <div>
        <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button></div>
  )
}
