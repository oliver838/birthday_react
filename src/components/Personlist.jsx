import React from 'react'
import { Button } from 'reactstrap'

export const Personlist = ({pers,setPers}) => {


    const handleDelete = (id)=>{
        setPers(prev=>prev.filter(obj=>obj.id!=id))
    }
  return (
    <div className='personcontainer'>
      {pers && pers.map(obj=>(
        <div className='perscards' key={obj.id}>
            <img className='img-fluid' src={obj.image} alt="" />
            <h6 style={{marginTop:"5px"}}>{obj.name}</h6>
            <Button style={{width:"100%",borderBottomRightRadius:"9px",borderBottomLeftRadius:"9px",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",padding:"15px"}} onClick={()=>handleDelete(obj.id)}>Delete</Button>
        </div>
      ))}
        
    </div>

    
  )
}
