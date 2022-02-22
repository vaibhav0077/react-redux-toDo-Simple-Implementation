import { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from '../Actions/index';
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {

    const [inputData, setInputdata] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <input type='text'
                placeholder='enter Task'
                value={inputData}
                onChange={(event) => setInputdata(event.target.value)} />
            <i className="fa fa-plus"
                aria-hidden="true"
                onClick={() => dispatch(addTodo(inputData), setInputdata(''))}
            />

            <div>
                {
                    list.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <h3>{elem.data} <i className="fa fa-trash"
                                    aria-hidden="true"
                                    onClick={() => dispatch(deleteTodo(elem.id))}
                                /></h3>

                            </div>
                        );
                    })
                }
            </div>
            <div>
                <i className="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => dispatch(removeTodo())}
                />

            </div>

        </>
    );
}

export default Todo;