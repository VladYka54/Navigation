import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const AnotherScreen = ({ navigation }) => {
    const toggleMenu = () => {
        navigation.toggleDrawer()
    }
    return (
        <View style={styles.container}>
            <Button 
                title='Бокове Меню'
                onPress={toggleMenu}
            />
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

export default AnotherScreen