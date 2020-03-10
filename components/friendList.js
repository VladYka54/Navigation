import React from 'react'
import { FlatList } from 'react-native'
import Friend from './friend'

const FriendList = ({ friends, goToFriend }) => (
    <FlatList
        data={friends}
        renderItem={({ item }) => (
            <Friend
                name={item.name}
                goToFriend={goToFriend}
            />
        )}
        keyExtractor={item => item.id}
    />
)

export default FriendList