import React from 'react'
import { useNavigate } from 'react-router-dom';



const Pagination =() => {
  const navigate = useNavigate();
   
  
  return (
    <div>
    
      <button className='btn btn-success' type="submit" href='#about' onClick={()=>navigate("/about")}>Go Back to about</button>
    </div>
  )
}

export default Pagination;
