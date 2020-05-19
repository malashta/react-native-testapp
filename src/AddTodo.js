import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const Addtodo = ({ onSubmit }) => {
    
    const pressHandler = () => {
        onSubmit('Test todo');
    }
    
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button title="Добавить" onPress={pressHandler}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
});
