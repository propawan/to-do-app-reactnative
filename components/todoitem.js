import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = ({ item, pressHandler }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { pressHandler(item.key) }}>
                <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
    }
})

export default TodoItem;