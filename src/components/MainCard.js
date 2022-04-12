import { getValue } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"

function MainCard() {

    let [value, setvalue] = useState(Math.floor(Math.random() * 15));

    return (
        <div
            style={{
                backgroundColor: 'lightBlue',
                border: '2px dotted blue',
                width: 140,
                height: 220,
                margin: 10
            }}
        >
            {value}
        </div>
    )
}
export default MainCard;