import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import FriendList from '../components/friendList'

const FriendsScreen = ({ navigation }) => {
    const [friends, setFriends] = useState([
        {id: '1', name: 'Vlad'},
        {id: '2', name: 'Roma'},
        {id: '3', name: 'Vika'},
        {id: '4', name: 'Artem'},
        {id: '5', name: 'Ivan'}
    ])

    const toggleMenu = () => {
        navigation.toggleDrawer()
    }

    const goToFriend = (name) => {
        navigation.navigate('Friend', { name })
    }

    return (
        <View style={styles.container}>
            <FriendList
                friends={friends}
                goToFriend={goToFriend}
            />
            <Button 
                title='Меню'
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

export default FriendsScreen