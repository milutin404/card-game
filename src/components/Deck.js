import { useState } from "react";
import { useDispatch } from "react-redux";
import refreshMainCard from "./../actions/refreshMainCard"

function Deck(props) {

    let [counter, setCounter] = useState(7)
    const dispatch = useDispatch();

    const changeCounter = () => {
        setCounter(counter - 1);
        props.gameOver(counter - 1);
        dispatch(refreshMainCard())
    }
    return (
        <div
            style={{
                backgroundColor: 'lightGreen',
                fontSize: '48px',
                width: 140,
                height: 220,
                margin: 10
            }}
            onClick={changeCounter}
        >
            {counter}
        </div>
    )
}
export default Deck;