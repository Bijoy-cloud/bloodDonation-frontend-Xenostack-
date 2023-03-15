import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import "./ContactUs.css"
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import loading from "../login/loading.gif"
function ContactUs() {
    const [isLoading,setIsLoading] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
      e.preventDefault();

      // Here you can add your own code to submit the data to your backend

      axios.post("/contact-us",
      {
        name:name,
        email:email,
        query:query
      },{
        headers:{
            // token:token
        }
      }
      ).then((res)=>{
        setIsLoading(false)
        // console.log(res.data)
        alert(res.data.message)
        navigate("/")
      }).catch(err=>{
        setIsLoading(false)
        alert("Error")
      })
    }
  
    return (
        <>
        <Navbar/>
        <div className="contactUsContainer">
        
        {isLoading && <img src={loading} alt="loading.." className="loading-icon" />}
      <form onSubmit={handleSubmit} className="contactusForm">
      <span className='contactusHeader'>Contact-Us</span>

        <div className="contactus_Subgrp">
        <label className='contactusLabel'>
          Name:
        </label>
        <input
            type="text"
            className='contactusInput'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div className="contactus_Subgrp">
        <label className='contactusLabel'>
          Email:
          
        </label>
        <input
            className='contactusInput'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc123@gmail.com"
            required
          />
        </div>
        <div className="contactus_Subgrp">
        <label className='contactusLabel'>
          Your Query:
          
        </label>
        <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Write Your Query"
            required
          />
        </div>
        
        
        
        <button type="submit" className='contactusBtn'>Contact Us</button>
      </form>
      <div className='contactusFooter'>
      <Footer/>
      </div>
      </div>
      </>
    );
}

export default ContactUs