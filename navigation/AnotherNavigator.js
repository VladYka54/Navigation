import React from 'react'
import { SafeAreaView, ScrollView, View, Image, TouchableOpacity, Text, AsyncStorage } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import FriendsNavigator from './FriendNavigator'
import AnotherScreen from '../screens/anotherScreen'

const CustomDrawerComponent = (props) => {
    const { navigation } = props
    const _signOutAsync = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
      }
    
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/plane2.jpg')} style={{height: 120, width: 120, borderRadius: 60}} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
        <TouchableOpacity
            onPress={_signOutAsync}
            style={{width: '40%', marginBottom: 10, marginLeft: 10, backgroundColor: 'red', borderRadius: 40}}
        >
            <Text style={{padding: 10, textAlign: 'center', fontSize: 18, color: 'white'}}>
              Log Out  
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

const AnotherNavigator = createDrawerNavigator({
    Another: {
        screen: AnotherScreen,
        navigationOptions: {
            title: 'Profile'
        }
    },
    Friends: {
        screen: FriendsNavigator,
        navigationOptions: {
            title: 'Друзья'
        }
    },
}, {
    contentComponent: CustomDrawerComponent,
    drawerPosition: 'right'
})

export default AnotherNavigator