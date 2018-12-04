import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import UserProfile from './users/UserProfile';
import UsersAPI from '../models/usersAPI';

class Profile extends Component {
    state = {
        user: null,
      }

componentDidMount = () => {
    let user = jwt_decode(localStorage.getItem('jwtToken'));
    let id = user._id;
    UsersAPI.showById(id)
        .then(res => {
            this.setState({ user: res.data })
        })
        .catch(error => console.log(error));
}

    render() { 
        return (
            <UserProfile userData={this.state.user} postData={this.state.post} />
        );
    }
}
 
export default Profile;