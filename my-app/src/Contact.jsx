import React from 'react';



const Contact = () =>{
return(
    <>
     <div className="my-5">
         <h1 className="text-center">Contact us</h1>
     </div>
     <div className="container contact_div">
         <div className="row">
             <div className="col-md-6 col-10 mx-auto">
                 <form>

                 <div className="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
  </div>

  <div className="form-group">
  <label for="exampleInputEmail1">Phone Number</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>

                 </form>
             </div>
         </div>
     </div>
    </>
);
};

export default Contact;