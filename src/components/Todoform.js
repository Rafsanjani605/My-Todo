import React, { useState } from 'react';
import './todoform.css'

const Todoform = (props) => {

    const [todo , setTodo] = useState({title: "", description: ""})
    const {title , description} = todo;
 
    
    const handlechange= (event)=>{
        const name = event.target.name;
        setTodo((oldtodo) =>{
            // ... for updates old to new
            return { ...oldtodo, [name]: event.target.value }
        })

    }
    const handelsubmit =(event)=>{
        event.preventDefault();
        props.onaddtodo(todo)
        setTodo({ title: "" , description: ""});
        
    }


    return (
       <form className='form' onSubmit={handelsubmit}>
        <div className='form-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' value={title} onChange={handlechange}></input>
        </div>
        <div className='form-field'>
            <label htmlFor='description'>Description</label>
            <textarea type='text' id='description' name='description' value={description} onChange={handlechange}></textarea>
        </div>
        <button type='submit'>Add todo</button>
       </form>
    );
};

export default Todoform;