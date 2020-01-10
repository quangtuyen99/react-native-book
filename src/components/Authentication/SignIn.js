import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import signIn from '../../api/signIn'
import global from '../global'
import saveToken from '../../api/saveToken'
// Component đâng nhập
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    // Hàm kiểm tra đăng nhập
    onSignIn() {
        const { email, password } = this.state;
        if( email == '' || password == '') {
            alert("Bạn đã diền thiếu thông tin, mời bạn nhập lại");
        }
        else {
            signIn(email, password)
            .then(res => {
                global.onSignIn(res.user);
                this.props.navigation.goBack();
                saveToken(res.token);
            })
            .catch(err => console.log(err))
        }
    }
    
    render() {
        const {email, password} = this.state;
        return (
            <View style={styles.row2}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    value = {email}
                    onChangeText = {text => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your password"
                    value = {password}
                    onChangeText = {text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity 
                    style={styles.bigButton}
                    onPress = {
                        this.onSignIn.bind(this)
                    }
                >
                    <Text style={styles.buttonText}>Sign In Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row2: {
        marginBottom: 130
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