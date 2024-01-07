import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BlogContext from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

export default function IndexScreen() {
    const { data, addBlogPost } = useContext(BlogContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title='Add Blog Post' onPress={() => addBlogPost()} ></Button>
            <FlatList data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
