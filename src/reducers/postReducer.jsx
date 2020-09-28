import { FETCH_POSTS, NEW_POSTS ,DELETE_POSTS} from "../actions/types"

const initialState = {
    items: [],
    item: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: payload
            }
        case NEW_POSTS:
            return {
                ...state,
                item: payload
            }
        case DELETE_POSTS:
            return {
                ...state,
                item: payload
            }
        default:
            return state
    }
}
