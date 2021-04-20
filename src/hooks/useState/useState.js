import {useState} from 'react'

const StateHook = () => {

    //Привичная форма деструктуризации
    // const state = useState(false);
    // const like = state[0];
    // const setLiked = state[1];

    const [liked, setLiked] = useState(false);

    const onLiked = () => {
        setLiked(!liked);
    }
    return (
        <>
            <button onClick={onLiked}>Лайк</button>
            <div>
                {liked
                    ? 'Понравилось'
                    : 'Не понравилось'
                }
            </div>
        </>
    )
}
export default StateHook;