import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const FriendScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <Text>Друг {navigation.getParam('name')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FriendScreen