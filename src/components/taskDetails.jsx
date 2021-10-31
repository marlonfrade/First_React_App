import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button'

import './taskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () =>{
        history.push('/');
        //ou history.goBack();
    }

    return ( 
        <div>
            <div className="back_button_container" onClick = {handleBackButtonClick }>
                <Button>Voltar</Button>
            </div>

            <div className="task_details_container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ratione earum possimus aperiam fugiat, ab, qui accusantium exercitationem obcaecati quae ipsam eum repellat natus doloremque accusamus in necessitatibus temporibus rem!</p>
            </div>
        </div>
     );
}
 
export default TaskDetails;