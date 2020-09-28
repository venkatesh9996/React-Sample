import React, { Component } from 'react';
import { createPosts } from "../actions/postAction";
import { connect } from "react-redux"
import { Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            title: '',
            body: ''
        }
        console.log(Props.color)

    }

    //

    onpostSubmit(e) {
        console.log("onjusu", e)
        e.preventDefault();
        const posts = {
            title: this.state.title,
            body: this.state.body

        }
        // const url = "https://jsonplaceholder.typicode.com/posts";
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(posts)
        // }).then(response => response.json()).then(res => console.log(res));
        this.props.createPosts(posts);

    }
    ontypeChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {

        return (
            <div >
                <form onSubmit={(event) => this.onpostSubmit(event)}>
                    <label htmlFor="Title">Title</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={(event) => this.ontypeChange(event)} />

                    <br />
                    <br />
                    <label htmlFor="Body">Body</label>   <br />
                    <textarea name="body" cols="20" rows="5" value={this.state.body} onChange={(event) => this.ontypeChange(event)} ></textarea>
                    <br />
                    <Button variant="primary" type="submit">Sumbit</Button> 
                </form>
            </div>

        )
    }
}
export default connect(null, { createPosts })(PostForm);
