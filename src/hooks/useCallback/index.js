import { useState, useCallback } from 'react'
import * as React from "react";

const UseCallbackHook = () => {
  const [counter, setCounter] = useState(0)
  
  const onHeaderSet = () => {
	setCounter(counter + 1)
  }
  const memoizedCallback = useCallback(
	() => {
	  onHeaderSet();
	},
	[],
  );
  
  const RenderComponent = () => {
	
	return (
	  <>
		<button onClick={memoizedCallback}>Поменять</button>
		<h3>
		  {counter}
		</h3>
	  </>
	)
  }
  return <RenderComponent/>
}
export default UseCallbackHook;