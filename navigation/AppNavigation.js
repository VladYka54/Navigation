import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import NotificationNavigator from './NotificationNavigator'
import AnotherNavigator from './AnotherNavigator'

import FeedScreen from '../screens/feedScreen'

const AppNavigator = createBottomTabNavigator({
    Feed: {
        screen: FeedScreen,
        navigationOptions: {
            title: 'Todo'
        }
    },
    Notification: {
        screen: NotificationNavigator,
        navigationOptions: {
            title: 'News'
        }
    },
    Another: {
        screen: AnotherNavigator,
        navigationOptions: {
            title: 'Profile'
        }
    }
}, {
    initialRouteName: 'Feed'
})


export default createAppContainer(AppNavigator)