import {useContext} from 'react'
import {AppContext} from "../../App";

const ContextHook = () => {
    const state = useContext(AppContext);
    console.log(state)
    return (
        <>

        </>
    )
}
export default ContextHook;