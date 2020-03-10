import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import FriendsNavigator from './FriendNavigator'

import AnotherScreen from '../screens/anotherScreen'
import GroupsScreen from '../screens/groupsScreen'
import AudiosScreen from '../screens/audiosScreen'

const _AnotherNavigator = createStackNavigator({
    Another: {
        screen: AnotherScreen,
        navigationOptions: {
            title: 'Меню'
        }
    }
})

const _GroupsNavigator = createStackNavigator({
    Groups: {
        screen: GroupsScreen,
        navigationOptions: {
            title: 'Спільноти'
        }
    }
})

const _AudiosNavigator = createStackNavigator({
    Audios: {
        screen: AudiosScreen,
        navigationOptions: {
            title: 'Музика'
        }
    }
})

const AnotherNavigator = createDrawerNavigator({
    Another: {
        screen: _AnotherNavigator,
        navigationOptions: {
            title: 'Меню'
        }
    },
    Friends: {
        screen: FriendsNavigator,
        navigationOptions: {
            title: 'Друзья'
        }
    },
    Groups: {
        screen: _GroupsNavigator,
        navigationOptions: {
            title: 'Спільноти'
        }
    },
    Audios: {
        screen: _AudiosNavigator,
        navigationOptions: {
            title: 'Музика'
        }
    }
})

export default AnotherNavigator