import queues from '../data/data'

const initialState = {
    queuesData: queues,
    tickets:[1,3,4]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TICKET":
            const copyQueuesData = state.queuesData.map(queue => {
                if(queue.id === action.value)
                    queue.count +=1
                return queue
            })
            return{
                ...state,
                queuesData: copyQueuesData
            }
        default:
            return state
    }

}

export default reducer


   // let copyState = [...state]
            // let {queuesData} = copyState
            // queuesData[action.value].count += 1
            // console.log("this is the copyState")
            // console.log(copyState)
            // const copyState = {...state}
            // copyState.queuesData.find(queue => queue.id === action.value).count +=1
            // console.log(copyState)