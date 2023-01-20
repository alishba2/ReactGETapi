import React from 'react'

export default function Comp1(props) {
    const name = props.name;
    const tool = props.tool;
  return (
    <div>

        <h2>name of fruit is {name}</h2>
        <h2>My fav tool is {tool}</h2>
    </div>
  )
}
