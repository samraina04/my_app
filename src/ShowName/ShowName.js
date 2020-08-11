import React from 'react';
import "./showName.css";

const ShowName = ({details}) => {



    return (
        <div>
            {
                details === null ?
                    <div>
                        
                    
                    </div> : 
                    <ul>
                        {details.map(detail => (
                            <li key={detail.name}>{detail.name}</li>
                    
                        ))}
                    
                    </ul> 
            } 
        </div>
    );
}

export default ShowName;