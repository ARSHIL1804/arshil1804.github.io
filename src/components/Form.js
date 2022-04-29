import React, { useState } from 'react'
import '../componentCss/form.css'

export default function Form() {
  const movieName=JSON.parse(localStorage.getItem("Movie")).show.name;
  function handleClose(){
    window.location.reload();
  }
  function handleChange(e){
    console.log(e.target.id)
    setState([{...state,[e.target.id]:e.target.value}])
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(state.Name)
        alert("Booked Successfully");
        window.location.reload();
  }
  const [state,setState]=useState([{"Name":"","Email":"","Contact":"","TicketsCount":""}])
  return (
    <div className="overlay">
        <div className='formContainer'>
              <div className='close' >
                 <i class="fa fa-window-close" aria-hidden="true" onClick={handleClose}></i>
              </div>
              <form>
              <div class="form-group">
                <label for="Name">Name </label>
                <input type="text" class="form-control" id="Name"  onChange={handleChange} placeholder="Your Name"/>
              </div>
              <div class="form-group">
                <label for="Email">Email address</label>
                <input type="email" class="form-control" id="Email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div class="form-group">
                <label for="Contact">Movie Name</label>
                <input type="text" class="form-control" id="Contact" onChange={handleChange}  placeholder="Contact Number"/>
              </div>
              <div class="form-group">
                <label for="MovieName">Movie Name</label>
                <input type="text" class="form-control" id="MovieName" value={movieName} disabled placeholder="Movie Name"/>
              </div>
              <div class="form-group">
                <label for="counter">Ticket Count</label>
                <input type="number" class="form-control" id="TicketsCount" onChange={handleChange}  placeholder="Tickets Count"/>
              </div>
              <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}
