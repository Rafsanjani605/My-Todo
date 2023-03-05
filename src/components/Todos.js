import React from 'react';
import Todo from './Todo';
import './todos.css'
const Todos = ({todos ,onremovetodo}) => {
    
    return (
        <section className='todosstyle'> 
            {
                todos.map(todo => <Todo todo = {todo} key={todo.id} id={todo.id} onremovetodo={onremovetodo}></Todo> )
            }
        </section>
    );
};

export default Todos;