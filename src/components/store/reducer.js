import queues from '../data/data'

const initialState = {
    queuesData: queues,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case "INC_COUNTER":
        //     return{
        //         ...state,
        //         counter: state.counter + 1
        //     }
        // case "ADD_TO_COUNTER":
        //     return{
        //         ...state,
        //         counter: state.counter + action.value
        //     }
        default:
            return state
    }

}

export default reducer