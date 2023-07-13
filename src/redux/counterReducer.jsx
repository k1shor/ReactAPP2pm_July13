const initialData = {
    count: 0, 
    data: 100
}

const counterReducer = (state = initialData, action) => {
    switch(action.type){
        case "INCREASE":
            return {...state, count: ++state.count}

        case "INCREASE_DATA":
            return {...state, data: state.data + 10}

        default:
            return state;
    }
}

export default counterReducer