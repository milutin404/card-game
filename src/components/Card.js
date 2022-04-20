import { useDispatch } from 'react-redux';
import compareValues from './../actions/compareValues'

function Card(props) {

    const dispatch = useDispatch();

    /**
     * Sends action to compare and update MainCard,
     * Callback to parent to remove it from cards.
     */
    const onClickHandler = () => {
        dispatch(compareValues(props.cardNumber));
        props.removeCard(props);
    }

    return (
        <div
            style={{
                backgroundColor: 'brown',
                fontSize: '48px',
                cursor: 'pointer',
                width: 140,
                height: 220,
                margin: 10
            }}
            onClick={onClickHandler}
        >
            {props.cardNumber}
        </div>
    )
}
export default Card;