import React from 'react';

import Task from './task';

const Tasks = ({ tasks, handleTaskClick, handleTaskRemove}) =>{
  
    return (
        <>
            {tasks.map((task) => (
            
            <Task task= {task} handleTaskClick = {handleTaskClick} handleTaskRemove={handleTaskRemove}/>
            
            ))}
        </>
    )
};

export default Tasks;