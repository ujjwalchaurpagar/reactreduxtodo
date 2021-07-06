const initialState = {
    list: []
}

const todoreducer = (state=initialState, action) =>{
    switch(action.type){
        case "AddTodo" :
            const {id, data} = action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id,
                        data
                    }
                ]
            }

        case "DeleteTodo":
            const newList = state.list.filter((item) => item.id !== action.payload.id)
            return{
                ...state,
                list: newList
            }

        case "RemoveTodo" :
            return {
                ...state,
                list: []
            }
        
        default : return state
    }
}

export default todoreducer;