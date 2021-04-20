import {useState, useRef, useImperativeHandle, forwardRef} from 'react'


const SomeComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        count,
    }));

    const updateCount = () => {
        setCount((c) => c + 1);
        console.log(count + 1);
    };

    return (
        <div>
            <button onClick={updateCount}>
                increment
            </button>
        </div>
    )
})

const OtherComponent = forwardRef((props, ref) => {
    const checkCount = () => console.log("->", ref.current.count);

    return <button onClick={checkCount}>Count</button>;
});


const ImperativeHandleHook = () => {
    const divRef = useRef();

    return (
        <div ref={divRef}>
            <SomeComponent ref={divRef}/>
            <OtherComponent ref={divRef}/>
        </div>
    )
}
export default ImperativeHandleHook;