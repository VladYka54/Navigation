import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator } from 'react-navigation'

import NotificationScreen from '../screens/notificationScreen'
import CommentScreen from '../screens/commentScreen'

const _NotificationNavigator = createStackNavigator({
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            title: 'Пуші'
        }
    }
})

const _CommentNavigator = createStackNavigator({
    Comment: {
        screen: CommentScreen,
        navigationOptions: {
            title: 'Коменти'
        }
    }
})

const NotificationNavigator = createSwitchNavigator({
    Notification: _NotificationNavigator,
    Comment: _CommentNavigator
})

export default NotificationNavigator