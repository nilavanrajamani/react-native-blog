import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function CreateScreen({ navigation }) {

    const { addBlogPost } = useContext(Context)

    return (<BlogPostForm onSubmit={(title, content) => { addBlogPost(title, content, () => { navigation.navigate('Index') }) }} ></BlogPostForm>);
}
