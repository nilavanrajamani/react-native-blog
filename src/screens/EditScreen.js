import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen({ navigation }) {
    const { state, editBlogPost } = useContext(Context)

    const id = navigation.getParam('id')

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (<BlogPostForm id={id} initialValues={{ title: blogPost.title, content: blogPost.content }} onSubmit={(title, content, id) => { editBlogPost(title, content, id, () => { navigation.pop() }) }} ></BlogPostForm>);
}