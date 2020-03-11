import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TodoItem = ({title, isComplete, complete, remove}) => (
    <View style={style.container}>
        <View style={style.textContainer}>
            <Text style={isComplete && style.textComplete}>
                {title}
            </Text>
        </View>
        <View style={style.textContainer}>
            <TouchableOpacity style={[style.button, style.buttonSuccess]} onPress={complete}>
                <Text style={style.buttonText}>
                    {isComplete ? 'Cancel' : 'Done'}
                </Text>  
            </TouchableOpacity>
            
            <TouchableOpacity style={[style.button, style.buttonDanger]} onPress={remove}>
                <Text style={style.buttonText}>
                    Delete
                </Text>  
            </TouchableOpacity>
        </View>
    </View>
)

TodoItem.defaultProps = {
    title: 'task-100',
    isComplete: false,
    complete: () => {},
    remove: () => {} 
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    textContainer: {
        flex: 1,
    },
    textComplete: {
        textDecorationLine: 'line-through'
    },
    button: {
        minWidth: 100,
        margin: 3,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#007bff'

    },
    buttonDanger: {
        backgroundColor: '#dc3545'
    },
    buttonSuccess: {
        backgroundColor: '#28a745'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default TodoItem