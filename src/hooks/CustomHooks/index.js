import useLocalStorageState from "./counter";

const CustomHooks = () => {
    const [count, setCount] = useLocalStorageState('count', 0);
    return (
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </div>
    )
}
export default CustomHooks;