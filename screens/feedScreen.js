import React from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native'

import Todo from '../components/todo'

const FeedScreen = () => {
    return (
        <>
            <SafeAreaView 
                style={styles.container}
            >
                <KeyboardAvoidingView
                    behavior='padding'
                    style={styles.todoContainer}
                >
                    <Todo />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    )
}
      

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      todoContainer: {
        flex: 1,
      }
})

export default FeedScreen