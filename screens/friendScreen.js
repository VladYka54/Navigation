import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const FriendScreen = ({ navigation }) => {
    const { name = [] } = navigation.state.params;
    return (
        <View style={styles.container}>
           <Text>Друг {name}</Text>
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