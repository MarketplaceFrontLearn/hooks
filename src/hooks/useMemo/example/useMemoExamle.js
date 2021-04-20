import { memoData } from "./data";
import { useState } from 'react'
import MemoView from "./view";
import React from "react";

const UseMemoExample = () => {
  
  const [list, setList] = useState(memoData);
  const onButtonCLick = () => {
	setList(state => {
	  return state.map(el => {
		return {
		  ...el,
		  ages: Math.random() * 100
		}
		
	  })
	})
  }
  return (
	<div>
	  <button onClick={onButtonCLick}>Invoke</button>
	  {list.map((item, index) =>
		<React.Fragment key={index}>
		  <MemoView
			name={item.name}
			lastname={item.lastName}
			ages={item.ages}
		  />
		</React.Fragment>
	  )}
	</div>
  )
  
}

export default UseMemoExample;