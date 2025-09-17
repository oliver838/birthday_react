import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'
import { Mymodal } from './Mymodal'

export const Personlist = ({pers,setPers}) => {
  const [isOpen,setIsOpen] = useState(false)
  const [modal,setModal] = useState(null)
    const handleDelete = (id)=>{
        setPers(prev=>prev.filter(obj=>obj.id!=id))
    }
    const handleModal =(img)=>{
      setModal(img)

      setIsOpen(!isOpen)
    }
      

  return (

    <div className='personcontainer'>
      <Mymodal modal={modal} setModal={setModal} isOpen={isOpen} setIsOpen={setIsOpen}/>

      {pers && pers.map(obj=>(
       
        <div  style={{cursor:'pointer'}} className='perscards' key={obj.id}>
            <img onClick={()=>handleModal(obj.image)} className='img-fluid' src={obj.image} alt="" />
            <h6 style={{marginTop:"5px"}}>{obj.name}</h6>
            <Button style={{width:"100%",borderBottomRightRadius:"9px",borderBottomLeftRadius:"9px",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",padding:"15px"}} onClick={()=>handleDelete(obj.id)}>Delete</Button>
        </div>
      ))}
        
    </div>

    
  )
}
