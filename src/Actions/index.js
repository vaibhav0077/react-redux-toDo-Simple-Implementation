export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payLoad: {
            id: new Date().getTime(), toString,
            data: data
        }
    }
}


export const deleteTodo = (id) => {
    // console.log('action :: ', id)
    return {
        type: "DELETE_TODO",
        payLoad: {
            id: id

        }
    }
}


export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}

