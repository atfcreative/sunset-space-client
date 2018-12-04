import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

class LogInForm extends Component {
    state = { 
        username: '',
        password: '',
        usernameError: '',
        passwordError: '',
        usernameError2: '',
        passwordError2: '',
    }

    validate = () => {
        let usernameError = "";
        let passwordError = "";
        let usernameError2 = "";
        let passwordError2 = "";
    
        if (!this.state.username) {
            usernameError = "Username cannot be blank";
        }
    
        if (!this.state.password) {
          passwordError = "Password cannot be blank.";
        }
    
        if (!this.state.username.match(/^[A-Za-z]+$/)) {
            usernameError2 = " -Upper and Lowercase letters only.";
        }

        if (!this.state.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            passwordError2 = " -Minimum eight characters, at least one letter and one number.";
          }

        if (passwordError || usernameError || passwordError2 || usernameError2) {
        this.setState({ passwordError, usernameError, passwordError2, usernameError2 });
        return false;
        }  

        return true;
      };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const isValid = this.validate();
        
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

    axios.post('http://localhost:4000/api/users/signin', userData)
        .then(res => {
            // console.log(res);
            const {token} = res.data;
            /*== make sure to save the jwt token ==*/
            localStorage.setItem('jwtToken', token);
            /*== make sure to decode token ==*/
            const decoded = jwt_decode(token);
            /*== this token goes to this user ==*/
            this.props.setCurrentUser(decoded);
            this.props.history.push('/profile');
            // console.log(this.props);
            alert('Killer! You are now logged in...');
        })
        .catch(err => {
            alert(`Invalid credentials bruh...`)
            console.log(err)
        });
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState({
                username: '',
                password: '',
                usernameError: '',
                passwordError: '',
            });
        }
    };


    render() { 
        return (
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="col text-center">
                      <h1>Login</h1>
                      <p className="text-h3"><strong>Welcome back,</strong> Glad to see you again!</p>
                     </div>
                    <div className="form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input type="text" className="form-control" id="usernameInput" name="username" placeholder="Enter username" onChange={this.handleChange} value={this.state.username} />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.usernameError}
                            {this.state.usernameError2}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="passwordInput" name="password" placeholder="Enter password" onChange={this.handleChange} value={this.state.password}/>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError}
                        {this.state.passwordError2}
                    </div>
                        <p className="text-muted">Per our privacy policy, we will never share personal information. <Link to="/">Learn more...</Link></p>
                    </div>
                    
                    <button type="submit" className="button fit special">Submit</button>
                    <h6 className="m-2 text-muted"><Link to="/register">Not a member? Join here!</Link></h6>
                </form>
              </div>
            </div>
        </div>

          );
    }
}
 
export default LogInForm;










