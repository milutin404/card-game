const compareValues = (value) => {
    return {
        type: 'COMPARE_VALUES',
        payload: value
    }
}

export default compareValues;