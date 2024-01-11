import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

export default function CreateScreen() {
    const { state } = useContext(Context)
    
    return (
        <View>
            <Text>Create Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({});