import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatysBar, ImageBackground, Dimensions } from 'react-native'

// import AppNavigator from './navigation/AppNavigation'

const userInfo = {userName: 'admin', password: 'qwerty'}
const { width: WIDTH } = Dimensions.get('window')

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super()
        this.state = {
            userName: '',
            password: ''
        }
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
                        onPress={() => this.props.navigation.navigate('Notification')}
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
            alert('Logged in))')
            this.props.navigation.navigate('Notification')
        }else {
            alert('U are loser')
        }
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

export default LoginScreen