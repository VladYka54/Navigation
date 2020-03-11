import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import TodoList from '../todoList/index'

const Todo = () => {
    const [todoItems, setTodoItems] = useState([])
    const [text, setText] = useState('')
    const changeText = text => setText(text)

    const addTodoItem = () => {
        if(text.length > 0) {
            setTodoItems([
                ...todoItems, 
                {id: String(new Date()), title: text, isComplete: false }
            ])
        }
        setText('')
    }

    const completeTodoItem = id => {
        setTodoItems(todoItems.map(item => {
            return item.id === id ? {...item, isComplete: !item.isComplete} : item
        }))
    }

    const removeTodoItem = id => {
        setTodoItems(todoItems.filter(item => item.id !== id))
    }

    return (
        <>
            <TodoList 
                todoItems={todoItems}
                completeTodoItem={completeTodoItem}
                removeTodoItem={removeTodoItem}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Add task...'
                value={text}
                onChangeText={changeText}
                onSubmitEditing={addTodoItem}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        borderWidth: StyleSheet.hairlineWidth,
    }
})

export default Todo