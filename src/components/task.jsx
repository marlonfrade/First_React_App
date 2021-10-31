import React from 'react';

import { CgClose, CgInfo } from 'react-icons/cg';

import {useHistory} from 'react-router-dom';


import './task.css'

const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    // return ( 
    //     <div className = "task_container">
    //         {task.title}
    //     </div>
    // );

    const history = useHistory();

    const handleTaskDetailsClick = () =>{
        history.push(`/${task.title}`)
    }

    return(
        <div 
            className = "task_container" 
            style = {task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
        
            <div className ="task_title" onClick={()=> handleTaskClick(task.id)}>   
                {task.title}
            </div>
            
            <div className="buttons_container">
                <button className="remove_task_button" onClick = {() => handleTaskRemove(task.id)}>
                     <CgClose/>
                </button>
                <button className="detail_task_button"  onClick = {handleTaskDetailsClick }>
                     <CgInfo/>
                </button>
            </div>

        </div>
    );
};
 
export default Task;
