import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class LoginForm extends Component {
    state = {  }
    render() { 
        return (
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                <form>
                    <div className="col text-center">
                      <h1>Login</h1>
                      <p className="text-h3"><strong>Welcome back,</strong> Glad to see you again!</p>
                      <small className="text-muted">Per our privacy policy, we will never share personal information <Link to="/">learn more</Link></small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="exampleInputusername1" placeholder="Enter username" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
        </div>

        );
    }
}
 
export default LoginForm;