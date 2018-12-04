import React, { Component } from 'react';
import axios from 'axios';

class Uploader extends Component {

    state = {
        selectedFile: null
    }

fileSelectedHandler = event => {
    this.setState({
        selectedFile: event.target.files[0]
    });
}

fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://localhost:4000/public/uploads', fd)
        // onUploadProgress: ProgressEvent => {
        //     console.log('Upload progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%') 
        // }
    .then(res => {
        console.log(res);
    })
}
    
    render() { 
        return (
            <input type="file" onChange={this.fileSelectedHandler} />
            <button onClick={this.fileUploadHandler}>Uplaod</button>
        );
    }
}
 
export default Uploader;