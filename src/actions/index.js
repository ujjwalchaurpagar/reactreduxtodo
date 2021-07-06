export const addTodo = (data) =>{
    return {
        type: "AddTodo",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: "DeleteTodo",
        payload: { id }
    }
}

export const removeTodo = () => {
    return{
        type: "RemoveTodo"
    }
}