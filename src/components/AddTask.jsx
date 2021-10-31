import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e)=>{

        setInputData(e.target.value);
    }

    const handleAddTaskClick = ()=>{
        handleTaskAddition(inputData);
        setInputData('');
    
    }

    return ( 
        <div className="add_task_container">
            <input onChange={handleInputChange} value={inputData} className="add_task_input" type="text" />;
            <div className="add_task_button_container">
            <Button onClick ={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     ); 
}
 
export default AddTask;