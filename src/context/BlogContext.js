import createDataContext from './createDataContext';

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: "add_blogpost", payload: { title, content } });
        callback();
    };
}

const editBlogPost = (dispatch) => {
    return (title, content, id, callback) => {
        dispatch({ type: "edit_blogpost", payload: { title, content, id } });
        callback();
    };
}

const deleteBlogPost = (dispatch) => {
    return (id) => { dispatch({ type: "delete_blogpost", payload: id }) };
}

const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }]
        case "delete_blogpost":
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case "edit_blogpost":
            const states = state.filter((blogPost) => blogPost.id != action.payload.id);            
            return [...states, { id: action.payload.id, title: action.payload.title, content: action.payload.content }]
        default:
            return state;
    }
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [])
