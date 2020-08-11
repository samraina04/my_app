import React from 'react';
import "./showID.css";

const showID = ({details}) => {



    return (
        <div>
            {
                details === null ?
                    <div>
                        <div>
                        <h2>Loading Ids...</h2></div>
                    
                    </div> : 
                    <ul>
                        {details.map(detail => (
                            <li key={detail.id}>{detail.id}</li>
                    
                        ))}
                    
                    </ul> 
            } 
        </div>
    );
}

export default showID;