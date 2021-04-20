import image from "./pet.jpg"
import {useMemo} from "react";
import * as React from "react";

const ViewImage = () => {
    console.log('renderer')

    return <img src={image} alt="" width='50%' height='50%'/>

}

const ViewSpan = ({name, lastName, ages}) => {
    console.log('renderer')
    return <span>{name} {lastName} {Math.floor(ages)}</span>
}



const MemoView = ({name, lastname, ages}) => {
    const MemoizedViewImage = useMemo(() => <ViewImage/>, [])

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <ViewSpan name={name} lastName={lastname} ages={ages}/>
            {MemoizedViewImage}
        </div>
    )

}
export default MemoView