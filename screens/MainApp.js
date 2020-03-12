import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatysBar, ImageBackground, Dimensions, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'
import AppNavigator from '../navigation/AppNavigation'

const userInfo = {userName: 'admin', password: 'fly'}
const { width: WIDTH } = Dimensions.get('window')

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <ImageBackground source={require('../assets/plane.jpg')} style={styles.backgroundContainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder={'User name'} 
                        placeholderTextColor={'#000000'} 
                        underlineColorAndroid='transparent' 
                        style={styles.input}
                        onChangeText={(userName) => this.setState({userName})}
                        value={this.state.userName}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry={true} 
                        placeholderTextColor={'#000000'} 
                        underlineColorAndroid='transparent' 
                        style={styles.input}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onChangeText={(userPassword) => this.setState({userPassword})}
                        value={this.state.userPassword}
                        onPress={this._login}
                    >
                        <Text style={styles.btnText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onChangeText={(userPassword) => this.setState({userPassword})}
                        value={this.state.userPassword}
                    >
                        <Text style={styles.btnText}>
                            Sing up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
    _login = async() => {
        if(userInfo.userName === this.state.userName && userInfo.userPassword === this.state.userPassword) {
            await AsyncStorage.setItem('Logged', '1')
            this.props.navigation.navigate('App')
        }else {
            alert('Wrong password or name')
        }
    }
}

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._loadData()
    };

    _loadData = async () => {
        const isLogged = await AsyncStorage.getItem('Logged')
        this.props.navigation.navigate(isLogged !== '1' ? 'Auth' : 'App')
    }

    render() {
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle='dark-content' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
    },
    input: {
        width: WIDTH - 55, 
        height: 45,
        borderRadius: 25,
        backgroundColor: 'white',
        fontSize: 16,
        marginHorizontal: 25,
        paddingHorizontal: 20,
        opacity: .6,
        color: '#000000'
    },
    inputContainer: {
        marginTop: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 15,
    },
    btnLogin: {
        backgroundColor: '#BDB76B',
        padding: 15,
        borderRadius: 30,
        width: '35%'
    },
    btnText: {
        textAlign: 'center'
    }
})



const AuthStack = createStackNavigator({Login: LoginScreen})

const MainAppNav = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthStack
},{
   initialRouteName: 'AuthLoading' 
})

export default createAppContainer(MainAppNav)


