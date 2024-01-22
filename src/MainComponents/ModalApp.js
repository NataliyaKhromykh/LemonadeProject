import './../App.css';
import Modal from './Modal';
import Content from './Content';
import { useState } from 'react';


function ModalApp() {

    const [isOpen, setIsOpen] = useState(false);
  
    return(
      <div>
        <p onClick={() => setIsOpen(true)}>SignUpTwo</p>
  
        {isOpen && 
        <Modal setIsOpen={setIsOpen}>
        <Content setIsOpen={setIsOpen}/>
        </Modal>
        }
      </div>
    ) 
  }
  
  export default ModalApp;