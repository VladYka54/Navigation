import { createStackNavigator } from 'react-navigation-stack'

import FriendsScreen from '../screens/friendsScreen'
import FriendScreen from '../screens/friendScreen'

const FriendsNavigator = createStackNavigator({
    Friends: {
        screen: FriendsScreen,       
        navigationOptions: {
            title: 'Друзья'
        }
    },
    Friend: {
        screen: FriendScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('name')
        })
    }
})

export default FriendsNavigator