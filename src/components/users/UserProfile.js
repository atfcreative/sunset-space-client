import React, { Component } from 'react';
import ProfileCard from '../pages/ProfileCard';
// import jwt_decode from 'jwt-decode';
// import UsersAPI from '../../models/usersAPI';
// import avatar from './default-avatar.jpg';


class UserProfile extends Component {
    render() { 
        // const user = this.props.userData;
        // console.log(this.props.userData);
        
        // if (this.props.userData) {
        // let path = `/${user._id}`;
        // }
        return (
            <ProfileCard />
        );
    }
}
 
export default UserProfile;