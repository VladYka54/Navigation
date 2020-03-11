import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import NotificationNavigator from './NotificationNavigator'
import AnotherNavigator from './AnotherNavigator'

import FeedScreen from '../screens/feedScreen'
import MessageScreen from '../screens/messageScreen'
import SearchScreen from '../screens/searchScreen'
import LoginScreen from '../screens/loginScreen'

const _FeedNavigator = createStackNavigator({
    Feed: {
        screen: FeedScreen,
        navigationOptions: {
            title: 'Новини'
        }
    }
})

const _SearchNavigator = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            title: 'Пошук'
        }
    }
})

const _MessageNavigator = createStackNavigator({
    Message: {
        screen: MessageScreen,
        navigationOptions: {
            title: 'Повідомлення'
        }
    }
})

const _LoginNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Повідомлення'
        }
    }
})

const AppNavigator = createBottomTabNavigator({
    Login: {
        screen: _LoginNavigator,
        navigationOptions: {
            title: 'Login'
        }
    },
    Feed: {
        screen: _FeedNavigator,
        navigationOptions: {
            title: 'Новини'
        }
    },
    Search: {
        screen: _SearchNavigator,
        navigationOptions: {
            title: 'Пошук'
        }
    },
    Message: {
        screen: _MessageNavigator,
        navigationOptions: {
            title: 'Повідомлення'
        }
    },
    Notification: {
        screen: NotificationNavigator,
        navigationOptions: {
            title: 'Пуші'
        }
    },
    Another: {
        screen: AnotherNavigator,
        navigationOptions: {
            title: 'Меню'
        }
    }
}, {
    initialRouteName: 'Login'
})

export default createAppContainer(AppNavigator)