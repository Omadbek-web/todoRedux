import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoActions, todoPut } from '../store/todoSlice';

const TodoEdit = () => {
    const navigate = useNavigate()
    const state = useSelector( (state) =>{
        return state.todo
    })
    let params  = useParams()
    let id = params.id
    const dispatch = useDispatch()

    const yangilash = () => {
        let data2 = {
            data: {
                task: state.inputEdit,
                complated: false,
            },
            id:id
        }
        dispatch(todoPut(data2))
    }
    const keypress = (e) => {
        if(e.key === 'Enter'){
            yangilash()
        }
    }
    
    return ( 
        <div>
            { state.redirectPut ? navigate('../list') : "" }
            { 
                state.data.map((x, index) => {
                    if(x.id === id){
                        if(state.inpEditDis){
                            dispatch(TodoActions.changeInputEdit2(x.task))
                            dispatch(TodoActions.changeInputEditClr())
                        }
                        return (
                            <div className="Add" key={index}>
                                <input
                                    type="text" 
                                    onChange={(e) => dispatch(TodoActions.changeInputEdit(e.target.value))}
                                    value={state.inputEdit}
                                    onKeyPress={keypress}
                                />
                                <button onClick={yangilash}>EDIT</button>
                            </div>
                        )
                    }
                })
            }
        </div>
     );
}
 
export default TodoEdit;