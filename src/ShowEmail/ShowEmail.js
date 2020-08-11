import React from 'react';
import "./showEmail.css";

const ShowEmail = ({details}) => {



    return (
        <div>
            {
                details === null ?
                    <div>
                        <div>
                        <h2>Loading Emails...</h2></div>
                    
                    </div> : 
                    <ul>
                        {details.map(detail => (
                            <li key={detail.email}>{detail.email}</li>
                    
                        ))}
                    
                    </ul> 
            } 
        </div>
    );
}

export default ShowEmail;