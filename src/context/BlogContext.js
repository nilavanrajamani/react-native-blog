import createDataContext from './createDataContext';

const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
}

const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, { title: `Blog Post #${blogPosts.length + 1}` }]
        default:
            return state;
    }
};

export default { BlogContext, BlogProvider } = createDataContext(blogReducer, { addBlogPost }, [])
