import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const AddTodos = ({ submitHandler }) => {
    const [curr, setCurr] = useState("");

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='addTodos...'
                onChangeText={(val) => setCurr(val)}
            ></TextInput>
            <Button onPress={() => submitHandler(curr)} title='add' color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodos;