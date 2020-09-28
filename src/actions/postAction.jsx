import { FETCH_POSTS, NEW_POSTS ,DELETE_POSTS} from "./types";

export const fetchPosts = () => dispatch => {
    // console.log("object")
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(
        response => response.json()
    ).then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }));
}
export const createPosts = (postData) => dispatch => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    }).then(response => response.json())
        .then(post => dispatch({
            type: NEW_POSTS,
            payload: post
        }))
}
export const deletePosts = (id) => dispatch => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url, {
        method: "DELETE"
    }).then(response => response.json())
    .then(post => dispatch({
        type: DELETE_POSTS,
        payload: post
    }))
}
export const startAction = {
    type: "rotate",
    payload: true
  };
