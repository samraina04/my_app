import React, {useState, useEffect} from 'react';
import axios from "axios";

import ShowID from './ShowID/ShowID';
import ShowEmail from './ShowEmail/ShowEmail';
import ShowName from './ShowName/ShowName';

const App = () => {

  const [details, setDetails] = useState(null);
  const [emailFlag, setEmailFlag] = useState(false);
  const [nameFlag, setNameFlag] = useState(false);

  const fetchURL = "https://jsonplaceholder.typicode.com/users";
  
const fetchData = async () => {
    const result = await axios(fetchURL);
    setDetails(result.data);
  } 


const handleNameClick = e => {
  setNameFlag(true);
  setEmailFlag(false);
  
}

  return (
    <div>
      {fetchData}
      <h1 style={{textAlign: "center"}}>
          ----    Welcome User    ----
      </h1>

      <div style={ { margin: "30px", textAlign: "center"  }}>
          <button onClick={()=>handleNameClick} > Name</button>
        <button> Email</button>
      </div>

    
      
      <ShowID details = {details}  />
      <ShowEmail details = {details} />
          
      </div>

    
  )
}

export default App;
