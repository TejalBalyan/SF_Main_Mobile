import React,{useRef,useState} from 'react'
import './SignOut.css';

import UserContext from './Context/UserContext';
import { useContext } from "react";

function SignOut (props){
  const usercontext = useContext(UserContext);
  const {setuser, setUserToken, setIsloggedin} = usercontext;
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setOpenModal(false);
    }
  }
  return (
 
  <div className="sgnmodalBackgroundlanding1" onClick={closeModal} ref={modalRef}>
   
    <div className="sgnmodalContainerlanding1">
     
      
      
      <div className='landing-page-modal-content'>
        <div className='signin-content-container'>
          <div className='signin-content-container-2'>
            <div className='form-signin-heading1'>
            <h2>Are you sure you want to logout</h2>
            <button  className="close-btn"
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
            </div>
    </div> 
    </div> 
    </div>
    {/* </div> */}
     
      <div className="confirm-buttons">
        <button className='sgnbutton'onClick={()=>{
          props.change_logout_decision()
          setuser();
          setUserToken();
          localStorage.removeItem("user");
          localStorage.setItem("logstat", false);
          props.setOpenModal(false);
          
          
        }}>Logout</button>
        <button className='sgnbutton' onClick={()=>{
          props.setOpenModal(false);
          console.log("W")
        }}>Cancel</button>
      </div>
          </div>
        </div>
        
      
     
    
 
  )
}

export default SignOut;