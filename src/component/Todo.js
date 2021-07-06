import React, { Fragment,useState} from 'react';
import {addTodo, deleteTodo, removeTodo} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';

function Todo() {
    const [inputstate, setinputstate] = useState('');
    const dispatch = useDispatch();
    const list = useSelector(state => state.todoreducer.list)
    return (
        <Fragment>
            <h3>New Todo App with redux</h3>
            <div>
                <input type="text" placeholder="Add item" 
                    value={inputstate}
                    onChange={(e) => setinputstate(e.target.value)}
                />
                <button onClick={() => dispatch(addTodo(inputstate),setinputstate(''))}>+ Add</button>
            </div>
            <div>
                {
                    list.map((data) => {
                       return ( <h3 key={data.id}>{data.data} 
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => dispatch(deleteTodo(data.id),setinputstate(''))}></i>
                        </h3>)
                    })
                }
                <button onClick={(e) => dispatch(removeTodo())}>Clear All</button>
            </div>
        </Fragment>
    )
}

export default Todo
