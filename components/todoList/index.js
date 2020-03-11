import React from 'react'
import TodoItem from '../todoItem'
import { FlatList } from 'react-native'

const TodoList = ({ todoItems, removeTodoItem, completeTodoItem }) => {
    const todoItem = ({item}) => <TodoItem title={item.title} 
    isComplete={item.isComplete} 
    remove={() => removeTodoItem(item.id)} 
    complete={() => completeTodoItem(item.id)} 
    />

    return (
        <FlatList
            data={todoItems}
            renderItem={todoItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}
    

export default TodoList