import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    render() { 
        return (
            
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                  <div className="row">
                    <div className="col text-center">
                      <h1>Register</h1>
                      <p className="text-h3">It's <strong>FREE</strong> and Easy!</p>
                      <small className="text-muted">Per our privacy policy, we will never share personal information <Link to="/">learn more</Link></small>
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Username" required />
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="col">
                      <input type="password" className="form-control" placeholder="Confirm Password" required />
                    </div>
                  </div>
                  <div className="row justify-content-start mt-4">
                    <div className="col">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          I Read and Accept <Link to="/">Terms and Conditions</Link>
                        </label>
                      </div>
        
                      <button className="btn btn-primary mt-4">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          );
    }
}
 
export default SignUpForm;