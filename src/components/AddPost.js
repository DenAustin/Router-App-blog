import React, {Component} from 'react';
import './assets/style/form.css';
import { v4 as uuidv4 } from 'uuid';
import {NavLink} from 'react-router-dom';


class AddPost extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            post: 
                {
                    title: '',
                    category: '',
                    description: ''
                }
         
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        let newPost = {id: uuidv4(), ...this.state.post};
        this.props.addPost(newPost)
        console.log(newPost)
        console.log(this.props)
        this.props.history.push('/');


      
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
        console.log(post)
       

    }
    render() {
        console.log(this.state)

        let {title, category, description} = this.state;

        return (
            <div>
                <h1>This is the Add Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-topics">
                    <label>Title</label>
                    <input type="text" name="title"
                    value={title} placeholder="title" 
                    onChange={this.handleChange}></input>
                    </div>

                    <div className="input-topics">
                    <label>Category</label>
                    <input type="text" 
                    name="category" 
                    value={category}
                    placeholder="category" 
                    onChange={this.handleChange}></input>
                    </div>
                    
                    <label>Write a New Post</label>
                    <textarea type="text" 
                    name="description"
                    category={description} 
                    placeholder="write here" 
                    onChange={this.handleChange}></textarea>
                    <button onClick={this.addPost}>Save</button>
                    
                    <NavLink to ="/">Cancel</NavLink>
    
    
                </form>
            </div>
        )
    }
    }
    

export default AddPost;