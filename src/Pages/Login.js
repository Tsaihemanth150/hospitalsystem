import "./style.css"
import background from "../img/l4.jpg";

import image from "../img/office.jpg";


function contactus() {

    return (
   

 <>
         <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:700  }}>
         <br/>
         <div id="shead">
        <h2> Welcome to HMS Please Login Here </h2>
        </div>
        <br/>
 < div class="mx-auto w-50 p-25"> 
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email " required/>

  </div>
  <br/>
  <div class="form-group ">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" requried id="exampleInputPassword1" placeholder="Password" required />
  </div>
  <br/>

 <div class="d-flex justify-content-start" required><a  href="/">Forgot Password</a> </div>
  <center>
  <button type="submit" class="btn btn-outline-secondary ">Login</button>
                                     <hr/>
                                     if you dont have an account ???
                                     <br/><br/>
  <a class="btn btn-primary" href="/Signup" role="button">Signup</a>
  </center>
</form>
</div>
</div>
 </>
    
    );
}

export default contactus;