import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

import SignIn from './SignIn'
import SignUp from './SignUp'

import book from '../../Media/appIcon/book.png'
// Compoent đăng kí, đăng nhập
export default class Authentication extends Component {
    
    static navigationOptions = {
        title: "Authentication"
    };

    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }
    // Hàm kiểm tra đã đăng nhập hay chưa
    SignIn() {
        this.setState ({isSignIn: true});
    }
    SignUp() {
        this.setState ({isSignIn: false});
    }

    render() {
        // Nhận biến isLogin từ Menu
        const isLogIn = this.props.navigation.getParam('isLogIn');
        // Đặt giao diện vào biến Main, nếu đã đâng nhập sẽ hiển thị giao diện SignIn, ngược lại là SignOut
        const Main = this.state.isSignIn ? <SignIn isLogIn = {isLogIn} navigation = {this.props.navigation}/> : <SignUp isSignIn={this.SignIn.bind(this) }/>;
        return (
            <View style={styles.Container}>
                <View style={styles.row1}>
                    <Text style={styles.text}>Reading a Book</Text>
                    <Image source={book} style={styles.iconStyle} />
                </View>

                {Main}

                <View style={styles.btnSign}>
                    <TouchableOpacity 
                        style={styles.signInStyle}
                        onPress = {this.SignIn.bind(this)}
                    >
                        <Text style={!this.state.isSignIn ? styles.inActiveStyle : styles.activeStyle}>SIGN IN</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                        style={styles.signUpStyle}
                        onPress = {this.SignUp.bind(this)}
                    >
                        <Text style={this.state.isSignIn ? styles.inActiveStyle : styles.activeStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-between',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    iconStyle: {
        height: 50,
        width: 50
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginLeft: 90
    },
    btnSign: {
        flexDirection: 'row',
        width: 300,
        marginLeft: 50,
        marginBottom: 20,

    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        padding: 17,
        borderTopLeftRadius: 22,
        borderBottomLeftRadius: 22,
        borderRightWidth: 3,
        borderRightColor: '#34B089'
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        padding: 17,
        borderBottomRightRadius: 22,
        borderTopRightRadius: 22,
        borderLeftWidth: 3,
        borderLeftColor: '#34B089'
    },
    inActiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#34B089'
    },
    textInput: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400'
    }
});