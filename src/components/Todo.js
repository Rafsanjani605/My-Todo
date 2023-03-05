import React from 'react';
import './todo.css'

const Todo = (props) => {
    const {title, description} = props.todo;
    const {id} =props;

    const handleclick = (id) =>{
       props.onremovetodo(id)
    }
    return (
       <article className='todo'>
         <div>
            <h4>{title}</h4>
            <p>{description}</p>
         </div>
         <div>
            <button className='btn' onClick={() =>{
                handleclick(id)
            }}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
         </div>
       </article>
    );
};

export default Todo;