import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import brandingLogoSm from '../../images/branding-logo-sm.svg';

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

        axios.post('https://sunset-space-server.herokuapp.com/api/users/register', newUser)
          .then(res => {
            this.props.history.push('/signin')
          })
          .catch(err => console.log(err));
      }
    }

    render() { 
        return (
            
            <form className="container" onSubmit={this.handleSubmit} method="post">
            <br/>
            
              <div className="row justify-content-center">
              
                <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                  <div className="row">
                    <div className="col text-center">
                    <img src={brandingLogoSm} alt="" />
                      <h1>Register</h1>
                      <small>Become a member. It's<strong> FREE</strong> and Easy!</small>
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
                          <small className="text-muted">Sunset Space <Link to="/">Terms and Conditions</Link></small>
                        </label>
                      </div>
        
                      <button className="button fit special mt-5">Submit</button>
                      <p className="text-muted">Per our privacy policy, we will never share personal information. <br/><Link to="/">learn more</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        
          );
    }
}
 
export default SignUpForm;
