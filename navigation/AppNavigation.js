import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack' 

import FeedScreen from '../screens/feedScreen'
import MessageScreen from '../screens/messageScreen'
import SearchScreen from '../screens/searchScreen'

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

const AppNavigator = createBottomTabNavigator({
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
    }
}, {
    initialRouteName: 'Feed'
})

export default createAppContainer(AppNavigator)