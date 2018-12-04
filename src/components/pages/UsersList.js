import React, { Component } from 'react';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('http://localhost:4000/api/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        }); 

    }

    render() { 

        let { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {

        return (
            <div className="container">
                <ul>
                    {items.map(item => (
                          <li key={item._id}>
                            First Name: {item.firstName}<br />
                            Last Name: {item.lastName}<br />
                            Username: {item.username}<br />
                            Password: {item.password}<br />
                            Email: {item.email}<br />
                            Website: {item.website}<br />
                            Image: {item.imgUrl}<br />
                            Phone: {item.phone}<br />
                            ID: {item._id}<br />
                            Date: {item.dateAdded}

                          </li>  
                    ))};
                </ul>
            </div>
          );
        }
    }
}
 
export default UsersList;