import { useState, useEffect } from 'react'

const EffectHook = () => {
  
  const [liked, setLiked] = useState(false);
  
  const [counter, setCounter] = useState(0)
  
  const onLiked = () => {
	setLiked(!liked);
  }
  
  const onRender = () => {
	setCounter(counter + 1)
  }
  
  useEffect(() => {
	onRender()
	return () => console.log('component left')
  }, [liked])
  
  return (
	<>
	  <button onClick={onLiked}>Лайк</button>
	  <div>
		{liked
		  ? 'Понравилось'
		  : 'Не понравилось'
		}
	  </div>
	  <div>liked pressed {counter} times</div>
	</>
  )
}
export default EffectHook;