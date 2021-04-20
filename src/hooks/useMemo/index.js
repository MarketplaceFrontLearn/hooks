import {useEffect, useState} from 'react'
import * as React from "react";


const RenderComponent = ({header, title}) => {
    return (
        <>
            <h3>
                {header}
            </h3>
            <span>
                {title}
            </span>
        </>

    )
}

const isEqual = (prevProps, currentProps) => {
    console.log('prevProps', prevProps)
    console.log('currentProps', currentProps)
    // return prevProps.title !== currentProps.title
    return prevProps.title === currentProps.title
}

const RenderMemoizedComponent = React.memo(RenderComponent, isEqual)

const UseMemoComponent = () => {
    const [header, setHeader] = useState('Заголовок')
    const [title, setTitle] = useState('Хай')
    return (
        <>
            <button onClick={() => setHeader('Привет')}>Поменять приветствие</button>
            <RenderMemoizedComponent title={title} header={header}/>
        </>
    )
}
export default UseMemoComponent;