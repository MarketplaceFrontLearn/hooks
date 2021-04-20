import {useEffect, useLayoutEffect, useState} from 'react'

const LayoutEffectHook = () => {
    const [name, setName] = useState('Нина')
    useEffect(() => {
        console.log(`Rendered`)
        setName('Петя')
    },[])
    // useLayoutEffect(() => {
    //     console.log('init')
    //    setName('Вася')//Эффект мерцания
    // }, [])
    return (
        <div className='center'>
            <h1> -------------------{name}-------------------</h1>
        </div>
    )
}
export default LayoutEffectHook;