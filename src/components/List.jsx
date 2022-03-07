import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader1 from '../cssfx/Loader';
import { TodoActions, todoDelete } from '../store/todoSlice'


const List = () => {
    const state = useSelector( (state) => {
        return state.todo
    })

    const dispatch = useDispatch()

    useEffect( () => {
        // dispatch(todoGet())
        dispatch(TodoActions.redirectPostClr())
        dispatch(TodoActions.redirectPutClr())

    }, [ state.redirectDel, dispatch ])

    return ( 
        <div className="lists">
            {
                state.status === "succes" ?
                    state.data.map( (x, index) =>{
                        return(
                            <div key={index} className="list">
                                <h1>{x.task}</h1>
                                <div>
                                    <Link to={`/list/${x.id}`}>
                                        <button>EDIT</button>
                                    </Link>
                                    <button onClick={() => dispatch(todoDelete(Number(x.id)))}  >DEL</button>
                                </div>
                            </div>
                        )
                    })
                : <Loader1 />
            }
        </div>
     );
}
 
export default List;