import React, { Component } from 'react';
import register from '../../api/register';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// Component đăng kí
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            rePassword: ''
        }
    }
    // Đăng kí
    registerUser() {
        const { name, email, password, rePassword } = this.state;
        if(name == '' || email == '' || password == '' || rePassword == '') {
            alert("Bạn điền thiếu thông tin");
        }
        else{
            register(email, name, password)
            .then(res => {
                if (res === 'THANH_CONG') {
                    return this.onSuccess();
                }
                this.onFail();
            });
        }
    }

    // Hàm trả về khi đăng kí thành công
    onSuccess() {
        Alert.alert(
            'Notice',
            'Đăng ký thành công',
            [
              {text: 'OK', onPress: () => this.props.isSignIn()}
            ],
            {cancelable: false},
        );
        this.props.isSignIn();
    }

    // Đăng kí thất bại
    onFail() {
        Alert.alert(
            'Notice',
            'Email đã tồn tại',
            [
              {text: 'OK', onPress: () => this.removeEmail()}
            ],
            {cancelable: false},
        );
    }

    // Hàm xóa trống email khi nhập sai email
    removeEmail() {
        this.setState({email: ''});
    }

    render() {
        return (
            <View style={styles.row2}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your name"
                    value = {this.state.name}
                    onChangeText = {text => this.setState({ name: text })}              
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    value = {this.state.email}
                    onChangeText = {text => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your password"
                    value = {this.state.password}
                    secureTextEntry
                    onChangeText = {text => this.setState({ password: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Re-Enter your password"
                    value = {this.state.rePassword}
                    secureTextEntry
                    onChangeText = {text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity 
                    style={styles.bigButton}
                    onPress = {this.registerUser.bind(this)}
                >
                    <Text style={styles.buttonText}>Sign Up Now</Text>
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