
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Mymodal =  ({modal, setModal, isOpen, setIsOpen}) => {


  const toggle = () => {
    setModal(!modal)
    setIsOpen(!isOpen)
  }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     
      <Modal isOpen={isOpen} toggle={toggle} >
        
        <ModalBody>
          
          <img className='modal-img img-fluid' src={modal} alt="" />
        </ModalBody>
      </Modal>
    </div>
  );
}
