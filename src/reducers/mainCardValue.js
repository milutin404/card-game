const mainCardValue = (store = 5, action) => {
    switch (action.type) {
        case 'COMPARE_VALUES':
            const validNumber = (store + 1) === action.payload || (store - 1) === action.payload;
            return validNumber ? action.payload : store;
            break;
        case 'REFRESH_MAIN_CARD':
            return Math.floor(Math.random() * 15);
            break;
        default:
            return store;
            break;
    }
}
export default mainCardValue;