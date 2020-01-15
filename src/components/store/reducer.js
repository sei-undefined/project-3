import queues from '../data/data'

const initialState = {
    queuesData: queues
}

const reducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "GET_TICKET":
            const copyQueuesData = state.queuesData.map(queue => {
                if(queue.id === Number(action.value)){
                    queue.count +=1
                    queue.tickets=queue.tickets.concat({
                        id:queue.count,
                        name:queue.name,
                        turn:queue.count,
                        time:action.time})
                }
                return queue
            })
            return{
                ...state,
                queuesData: copyQueuesData
            }
        // case "SET_TIME":
        //     const copyQueuesData = state.queuesData.map(queue => {
        //         if(queue.id === Number(action.idvalue)){
        //             queue.tickets=queue.tickets.concat({
        //                 name:queue.name,
        //                 turn:queue.count,
        //                 time:"time goes here"})
        //         }
        //         return queue
        //     })
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