import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchScreen = () => (
    <View style={styles.container}>
        <Text>
            Пошук
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SearchScreen