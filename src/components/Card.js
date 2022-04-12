function Card(props) {
    return (
        <div
            style={{
                backgroundColor: 'brown',
                cursor: 'pointer',
                width: 140,
                height: 220,
                margin: 10
            }}
        >
            {props.cardNumber}
        </div>
    )
}
export default Card;