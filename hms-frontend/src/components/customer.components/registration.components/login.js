import React,{useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
export default function Login() {    

   return(
    <div className ="grid-container">
    <div className ="grid-item item-3">
   
    <div>
      <h1 className="text-center pt-3 text-secondary">Login</h1>            
      <form>
  
  <div class="form-outline mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" />
    
  </div>

  
  <div class="form-outline mb-4">
    <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" />
   
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <div class="d-grid gap-2 col-2 mx-auto">
      <button type="submit" class="btn btn-primary btn-block mb-3"  >Sign in</button>
  </div>
  
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    
  </div>
</form>       
</div>
            

</div>
</div> 



       
);

}   
