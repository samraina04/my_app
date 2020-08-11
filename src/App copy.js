import React, {useState, useEffect} from 'react';
import axios from "axios";

import ShowID from './ShowID/ShowID';
import ShowEmail from './ShowEmail/ShowEmail';
import ShowName from './ShowName/ShowName';

const App = () => {

  const [details, setDetails] = useState(null);

  const fetchURL = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(()=> {
    const fetchData = async () => {
      const result = await axios(fetchURL);
      setDetails(result.data);
      
      // .then(response => {
      //     setDetails(response.data);
      //     console.log(details);
      // })
      // .catch(error => <h1>Something Went Wrong <hr/> {error}</h1>)
    } 
    
    fetchData();
  },[])



  return (
    <div>
            <h1 style={{textAlign: "center"}}>
                ----    Welcome User    ----
            </h1>
            <div style={ { margin: "30px", textAlign: "center"  }}>
              <button onClick={<ShowName details = {details} />}> Name</button>
              <button> Email</button>
            </div>

            
          
          <ShowID details = {details}  />
          <ShowEmail details = {details} />
          
      </div>

    
  )
}

export default App;
