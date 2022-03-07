
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const todoGet = createAsyncThunk("todo/todoGet", async () => {
    const res = await axios.get("https://612746c5c2e8920017bc0bc1.mockapi.io/api/v1/todos");
    return res.data;
})
export const todoPost = createAsyncThunk("todo/todoPost", async (data) => {
    await axios.post("https://612746c5c2e8920017bc0bc1.mockapi.io/api/v1/todos", data);
})
export const todoDelete = createAsyncThunk("todo/todoDelete", async (x) => {
    await axios.delete(`https://612746c5c2e8920017bc0bc1.mockapi.io/api/v1/todos/${x}`)
})
export const todoPut = createAsyncThunk("todo/todoPut", async (x) => {
    await axios.put(`https://612746c5c2e8920017bc0bc1.mockapi.io/api/v1/todos/${x.id}`, x.data)
})

const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        data:[],
        status:null,
        statusPost:null,
        statusDelete:null,
        statusPut:null,
        redirectPost:false,
        redirectDel:false,
        redirectPut:false,
        text1:'',
        inputEdit:'',
        inpEditDis:true,
    },
    reducers:{
        getText: (state, action) => {
            state.text1 = action.payload
        },
        redirectPostClr: (state) => {
            state.redirectPost = false
        },
        redirectPutClr: (state) => {
            state.redirectPut = false
        },
        changeInputEdit: (state, action) => {
            state.inputEdit = action.payload
        },
        changeInputEdit2: (state, action) => {
            state.inputEdit = action.payload
        },
        changeInputEditClr: (state) => {
            state.inpEditDis = false
        },
    },
    extraReducers:{
        // ! GET
        [todoGet.pending]: (state)=>{
            state.status = "loading";
        },
        [todoGet.fulfilled]: (state, action)=>{
            state.status = "succes";
            state.data = action.payload;
        },
        [todoGet.rejected]: (state) => {
            state.status = "ishkal";
        },
        // ! POST
        [todoPost.pending]: (state)=>{
            state.statusPost = "loading";
        },
        [todoPost.fulfilled]: (state, action)=>{
            state.statusPost = "succes";
            state.redirectPost = true;
        },
        [todoPost.rejected]: (state) => {
            state.statusPost = "ishkal";
        },
        // ! DEL
        [todoDelete.pending]: (state)=>{
            state.statusDelete = "loading";
        },
        [todoDelete.fulfilled]: (state, action)=>{
            state.statusDelete = "succes";
            state.redirectDel = !state.redirectDel;
        },
        [todoDelete.rejected]: (state) => {
            state.statusPost = "ishkal";
        },
        // ! PUT
        [todoPut.pending]: (state)=>{
            state.statusPut = "loading";
        },
        [todoPut.fulfilled]: (state, action)=>{
            state.statusPut = "succes";
            state.redirectPut = true;
        },
        [todoPut.rejected]: (state) => {
            state.statusPut = "ishkal"
        },

    },
})

export const TodoActions = TodoSlice.actions;
export default TodoSlice.reducer;