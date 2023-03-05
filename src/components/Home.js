import React, { useState } from 'react';
import Todos from './Todos';
import './home.css'
import Todoform from './Todoform';
// import uuid..also installed using npm i uuid
import {v4 as uuid4} from "uuid";

// const dtodos = [
//     {
//         id: 1,
//         title: 'todo title 1',
//         description : 'todo1 description'
//     },
//     {
//         id: 2,
//         title: 'todo title 2',
//         description : 'todo2 description'
//     }
// ];



const Home = () => {

    const [todos , setTodos] = useState([]);
    const handleaddtodo = (todo) =>{
        setTodos((prevtodos) => {
            return [...prevtodos ,{id: uuid4() , ...todo}];
            
        })
    }

    const handleremove = (id) =>{
        
        setTodos((prevtodos) =>{
            const filteredtodos = todos.filter((todo) => todo.id !== id)
            return filteredtodos;

        })
    }


    return (

        <div className='container'>
            <h1>My Todo</h1>
            <Todoform onaddtodo={handleaddtodo}></Todoform>
            <Todos todos={todos} onremovetodo= {handleremove}></Todos>
            
        </div>
    );
};

export default Home;