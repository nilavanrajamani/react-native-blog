import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';

export default function CreateScreen({ navigation }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const { state, addBlogPost } = useContext(Context)

    return (
        <View>
            <Text style={styles.label} >Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(title) => setTitle(title)}></TextInput>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(title) => setContent(title)}></TextInput>
            <Button title='Add Blog Post' onPress={() => { addBlogPost(title, content, () => { navigation.navigate('Index') }) }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});