import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TodoActions, todoPost } from '../store/todoSlice';

const Add = () => {
    let navigate = useNavigate()
    const state = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const postTodo = () => {
        let data ={
            task: state.text1,
            complated: false,
        }
        dispatch(todoPost(data))
    }

    const keypress = (e) => {
        if(e.key === 'Enter'){
            postTodo()
        }
    }


    return ( 
        
        <div className="Add">
            { state.redirectPost ? navigate('../list') : "" }
            <input 
                type="text" 
                onChange={(e) => dispatch(TodoActions.getText(e.target.value))} 
                onKeyPress={keypress}
            />
            <button onClick={postTodo}>ADD</button>
        </div>
     );
}
 
export default Add;