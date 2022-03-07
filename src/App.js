import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import List from './components/List';
import TodoEdit from './components/TodoEdit';
import { todoGet } from './store/todoSlice';
import './style.scss'

const App = () => {
    const state = useSelector( (state) => {
        return state.todo
    })

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(todoGet())

    }, [ state.redirectDel, dispatch, state.redirectPost, state.redirectPut ])

  return ( 
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Link to="/">add</Link>
          <Link to="/list">list</Link>
        </div>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<TodoEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
   );
}
 
export default App;