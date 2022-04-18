import { useSelector } from "react-redux";

function MainCard() {

    const mainCardValue = useSelector(state => state.mainCardValue);

    return (
        <div
            style={{
                backgroundColor: 'lightBlue',
                fontSize: '48px',
                border: '2px dotted blue',
                width: 140,
                height: 220,
                margin: 10
            }}
        >
            {mainCardValue ? mainCardValue : Math.floor(Math.random() * 15)}
        </div>
    )
}
export default MainCard;