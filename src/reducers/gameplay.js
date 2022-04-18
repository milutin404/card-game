


const gamePlay = (store = [], action) => {
    switch (action.type) {
        case 'REMOVE_CARD':
            return store.filter(cardData => cardData.id !== action.payload.cardId);
            break;
        default:
            return store;
            break;
    }
}
export default mainCardValue;