import React, { useState ,useEffect} from 'react'

 function ApiData() {
    const [deatils,sedetails] = useState([])

    useEffect(() => {
        const url = "http://localhost:5000/get";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            sedetails(json)
          } catch (error) {
            console.log("error", error);
            
          }
        };
    
        fetchData();
    }, []);
  return (
    <div>
      {deatils.map((objects =><h1>{objects.name}</h1>))}
    </div>
  )
}
export default ApiData;