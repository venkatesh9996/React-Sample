import React, { Component } from 'react';
import Posts from '../components/posts';
import PostForm from '../components/postform';
import { Provider } from "react-redux"; 
import store from "../store"
class Home extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <PostForm color="green" />
                    <Posts />
                </div>
            </Provider>
        )

    }
}
export default Home;