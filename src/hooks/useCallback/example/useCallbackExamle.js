import { memoData } from "./data";
import { useCallback, useState } from 'react'
import MemoView from "./view";
import React from "react";

const UseCallbackExample = () => {
  
  const [list, setList] = useState(memoData);
  
  const [loading, setLoading] = useState(false)
  
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
  
  const memoizedCallbackAction = useCallback(() => {
    onButtonCLick()
  }, [loading]);
  
  return (
	<div>
	  <button onClick={memoizedCallbackAction}>Invoke</button>
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

export default UseCallbackExample;