export const addTodo = (data) => {
    if (data.length > 2) {
        return {
            type: "ADD_TODO",
            payLoad: {
                id: new Date().getTime(), toString,
                data: data
            }
        }
    }
    else {
        alert("Must Required larger String")
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

