import { useState } from "react";

function Deck(props) {

    let [counter, setCounter] = useState(5)

    const changeCounter = () => {
        setCounter(counter - 1);
        props.gameOver(counter - 1);
    }

    return (
        <div
            style={{
                backgroundColor: 'lightGreen',
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