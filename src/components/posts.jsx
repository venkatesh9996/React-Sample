import React, { Component  } from 'react';
import { fetchPosts } from "../actions/postAction";
import { deletePosts } from "../actions/postAction";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// import PropTypes from 'prop-types';

class Posts extends Component {
    // constructor(Props) {
    //     super(Props);
    //     this.state = {
    //         data: []
    //     }
    // } 
    componentWillMount() {
        this.props.fetchPosts();
        // const url = "https://jsonplaceholder.typicode.com/posts";
        // fetch(url).then(response => response.json()).then(res => this.setState({ data: res }))
    }
    onDelete(targentId) {
        console.log(targentId);
        this.props.deletePosts(targentId);
    }
    render() {

        return (

            <div>
                <h5>Total Number of Records  {this.props.posts.length}</h5>
                <table className="table table-border striped bordered hover" size="sm">
                    <thead>
                        <tr>
                            <td>S.No</td>
                            <th>Title</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.props.posts.map((item, i) => (
                            <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td><Button variant="danger" onClick={this.onDelete.bind(this, item.id)}>Delete</Button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        )
    }
}
Posts.prototypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,

}
const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts, deletePosts })(Posts);
