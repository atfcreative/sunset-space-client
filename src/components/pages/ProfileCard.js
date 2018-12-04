import React, { Component } from 'react';
// import avatar from './default-avatar.jpg';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
 
class ProfileCard extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            avatar: {
                imgUrl: ''
            },
            file: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            website: '',
            username: '',
            description: '',
            isLoaded: false
        };
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser = () => {
        let user = jwt_decode(localStorage.getItem('jwtToken'));
        let id = user._id;
        // let avatar = db.Avatar;
        // fetch('http://localhost:4000/uploads/')

        fetch('http://localhost:4000/api/users/' + id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    firstName: json.firstName,
                    lastName: json.lastName,
                    email: json.email,
                    phone: json.phone,
                    website: json.website,
                    username: json.username,
                    avatar: json.avatar,
                    description: json.description,
                    created_at: json.created_at,
                    updated_at: json.updated_at

                })
            }); 
        }

    ///////////////////////////////////////////////////////////////////////
    //==== File upload logic ****MAGIC****
    ///////////////////////////////////////////////////////////////////////
    handleFile = event => {
        this.setState({
            file: event.target.files[0]
        });
    }

    handleFileSubmit(e) {
        e.preventDefault();
        const id = this.state.items.avatar._id;
        console.log(id);
        const formData = new FormData();
        formData.append('file', this.state.file, this.state.file.name);

        axios.post('http://localhost:4000/api/avatar/' + id, formData)
            .then((response) => {
                alert('The file uploaded successfully');
                this.fetchUser();
            }).catch((error) => {
                console.log('FLAILED')
        });
    }


    ///////////////////////////////////////////////////////////////////////
    //==== UPDATE PROFILE logic
    ///////////////////////////////////////////////////////////////////////
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    handleUpdateSubmit = (event) => {
        event.preventDefault(); 
        
        const userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            website: this.state.website,
            username: this.state.username,
            description: this.state.description,
            avatar: this.state.avatar,
        }

        let user = jwt_decode(localStorage.getItem('jwtToken'));
        let id = user._id;
        axios.put('http://localhost:4000/api/users/' + id, userData)
        .then(res => {
            this.setState({
                items: userData,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phone: userData.phone,
                website: userData.website,
                username: userData.username,
                description: userData.description,
            })
            console.log(res);
            alert('Great! You updated your profile');
        })
        .catch(err => {
            alert(`Something happened Sis...`)
            console.log(err)
        });
    };


///////////////////////////////////////////////////////////////////////
//==== LOGOUT profile logic
///////////////////////////////////////////////////////////////////////

handleLogout = () => {
    // console.log(`someone clicked logout, what the...`)
    if (localStorage.getItem('jwtToken') !== null ) {
      localStorage.removeItem('jwtToken');
      this.setState({ currentUser: null, isAuthenticated: false });
    };
  };


///////////////////////////////////////////////////////////////////////
//==== DELETE PROFILE logic
///////////////////////////////////////////////////////////////////////

handleDelete = (event) => {
        event.preventDefault();

        let user = jwt_decode(localStorage.getItem('jwtToken'));
        let id = user._id;

    axios.delete('http://localhost:4000/api/users/' + id)
        .then(res => {
            console.log(res);
            alert('Boo! You deleted your profile');
        })
        .then(res => {
            if (user._id === null ) {
                this.setState({ currentUser: null, isAuthenticated: false })
              }
        })
        .then(() => this.setState({ redirect: true }))
        .catch(err => {
            alert(`Brudda, no can delete...`)
            console.log(err)
        });
    };

render() { 
    const { redirect } = this.state;
    let { isLoaded, items, } = this.state;
    // const date = this.props.items.created_at.toLocaleString().slice(0,10);
    // const date2 = this.props.items.updated_at.toLocaleString().slice(0,10);
    // let createdTime = new Date().toLocaleString().slice(0,10); 
   
    // console.log(items)

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    else if (redirect) {
        return <Redirect to='/' />
    }

    else {
        
        // const user = this.props.userData;
        // console.log(this.props.userData);
        return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10"><h1>{items.username}</h1></div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-3">
              
              <div className="text-center">
                <img src={items.avatar.imgUrl} className="avatar rounded-circle img-thumbnail mb-3" alt="avatar"/>
                
                    <div className="custom-file">
                        <input 
                        type="file" 
                        name=""
                        id="" 
                        onChange={this.handleFile}
                        className="custom-file-input" 
                        />
                        <label className="custom-file-label" htmlFor="customFile">Change...<i className="fas fa-file-upload"></i></label>
                        <button 
                        type="submit" 
                        onClick={this.handleFileSubmit} 
                        className="badge badge-sm">Upload</button>
                    </div>
                

                <small className="text-muted">Member since: {items.created_at}</small><br/>
                <small className="text-muted">Last updated: {items.updated_at}</small>
              </div><hr/><br/>
                <div className="card panel-default">
                    <div className="panel-heading text-center">{items.website} <i className="fa fa-link fa-1x"></i></div>
                    <div className="panel-body"></div>
                  </div>
                </div>
                <div className="col-sm-9">
        
                  <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <hr/>
                            <form onSubmit={this.handleUpdateSubmit} method="POST" encType="multipart/form-data">
                              
                                <div className="row">
                                    <div className="col-sm mb-4">
                                      <label htmlFor="first_name"><h6>First Name: {items.firstName}</h6></label>
                                      <input 
                                      type="text" 
                                      className="form-control" 
                                      name="firstName" id="firstName" 
                                      placeholder="first name" 
                                      onChange={this.handleChange} 
                                      value={this.state.firstName} 
                                      />
                                      </div>
                                    <div className="col-sm mb-4">
                                        <label htmlFor="last_name"><h6>Last Name: {items.lastName}</h6></label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        name="lastName" 
                                        id="lastName" 
                                        placeholder="last name" 
                                        onChange={this.handleChange} 
                                        value={this.state.lastName} 
                                        />
                                    </div>
                                  </div>
                                
                                <div className="row">
                                    <div className="col-sm mb-4">
                                      <label htmlFor="username"><h6>Username: {items.username}</h6></label>
                                      <input 
                                      type="text" 
                                      className="form-control" 
                                      name="username"
                                      id="username" 
                                      placeholder="Update Username" 
                                      onChange={this.handleChange} 
                                      value={this.state.username} 
                                      />
                                  
                                    </div>
                                    <div className="col-sm mb-4">
                                      <label htmlFor="phone"><h6>Phone: {items.phone}</h6></label>
                                      <input type="text" 
                                      className="form-control" 
                                      name="phone" 
                                      id="phone" 
                                      placeholder="Update phone" 
                                      onChange={this.handleChange} 
                                      value={this.state.phone} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm mb-4">
                                      <label htmlFor="email"><h6>Email: {items.email}</h6></label>
                                      <input 
                                      type="email" 
                                      className="form-control" 
                                      name="email" 
                                      id="email" 
                                      placeholder="Update email" 
                                      onChange={this.handleChange} 
                                      value={this.state.email} />
                                    </div>

                                    <div className="col-sm mb-4">
                                      <label htmlFor="website"><h6>Website: {items.website}</h6></label>
                                      <input 
                                      type="text" 
                                      className="form-control" 
                                      name="website" id="website" 
                                      placeholder="Update website" 
                                      onChange={this.handleChange} 
                                      value={this.state.website} />
                                    </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="comment">Description:<br/>
                                {items.description}</label>
                                <textarea 
                                className="form-control" 
                                rows="3" 
                                name="description" 
                                id="description" 
                                onChange={this.handleChange} 
                                value={this.state.description}>
                                </textarea>
                                </div>
                                <div className="col-sm-12">
                                    <br />
                                    <button className="button fit special" type="submit">Save and Update</button>
                                </div>
                            </form>
                            <br/>
                       
                                <hr/>

                            
                             <h4 className="mt-5">Reset Password</h4>
                            
                                <div className="row">
                                        <div className="col-sm mb-4">
                                        {/* <label htmlFor="email"><h6>Password: {items.email}</h6></label> */}
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        id="password" 
                                        placeholder="Reset Password" 
                                        // onChange={this.handleChange} 
                                        // value={this.state.email} 
                                        />
                                        </div>

                                        <div className="col-sm mb-4">
                                        {/* <label htmlFor="website"><h6>Confirm Password: {items.website}</h6></label> */}
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        name="password2" 
                                        id="password2" 
                                        placeholder="Confirm password" 
                                        // onChange={this.handleChange} 
                                        // value={this.state.website}
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <button className="button fit special mt-3" type="submit" onClick={this.handleUpdate}>Save and Update</button>
                                </div>

                                <hr/>
                                <h4 className="mt-5">Delete Account</h4>
                                <div className="col-sm-12">
                                    <button className="btn btn-lg btn-outline-danger btn-block" type="submit" onClick={this.handleDelete}>Delete</button>
                                    <small>This action cannot be undone.</small>
                                </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                
           
        );
        }
    }
}
 
export default ProfileCard;