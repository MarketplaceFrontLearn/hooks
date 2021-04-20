import {useEffect, useState, useMemo} from 'react'
import * as React from "react";

const UseMemoHook = () => {
    const [header, setHeader] = useState('Заголовок')
    const [title, setTitle] = useState('Хай')

    const RenderMemoizedComponent = ({title, header}) => {
        return (
            <>
                <button onClick={() => setHeader('Привет')}>Поменять</button>
                <h3>
                    {header}
                </h3>
                <span>
                {title}
            </span>
            </>
        )
    }
    return useMemo(() =>
            <RenderMemoizedComponent header={header} title={title}/>,
        [title, header])
}
export default UseMemoHook;