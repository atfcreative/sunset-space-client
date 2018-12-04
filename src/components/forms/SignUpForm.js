import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    state = { 
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        password2: '',
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.password === this.state.password2) {
        const newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        }
        axios.post(process.env.NODE_ENV === 'production' ? 'mongodb://sunset-space-user:testing321@ds113693.mlab.com:13693/heroku_6h37hbnb' : 'http://localhost:4000/api/users/register', newUser)
          .then(res => {
            this.props.history.push('/signin')
          })
          .catch(err => console.log(err));
      }
    }

    render() { 
        return (
            
            <form className="container" onSubmit={this.handleSubmit} method="post">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                  <div className="row">
                    <div className="col text-center">
                      <h1>Register</h1>
                      <small><strong>FREE</strong> and Easy!</small>
                      <p className="text-muted">Per our privacy policy, we will never share personal information <Link to="/">learn more</Link></p>
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="text" className="form-control" id="inputFirstname" placeholder="First Name" name="firstName" onInput={this.handleChange} required />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="inputLastname" name="lastName" placeholder="Last Name" onInput={this.handleChange} required />
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="email" className="form-control" id="inputEmail" name="email" placeholder="Email" onInput={this.handleChange} required />
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="text" className="form-control"id="inputUsername" name="username"  placeholder="Username" onInput={this.handleChange} required />
                    </div>
                  </div>
                  <div className="row align-items-center mt-4">
                    <div className="col">
                      <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password" onInput={this.handleChange} required />
                    </div>
                    <div className="col">
                      <input type="password" className="form-control" id="inputPassword2" name="password2" placeholder="Confirm Password" onChange={this.handleChange} required />
                    </div>
                  </div>
                  <div className="row justify-content-start mt-4">
                    <div className="col">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <small className="text-muted">I Read and Accept <Link to="/">Terms and Conditions</Link></small>
                        </label>
                      </div>
        
                      <button className="button fit special mt-5">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        
          );
    }
}
 
export default SignUpForm;