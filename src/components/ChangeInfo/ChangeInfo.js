import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';
import changeInfo from '../../api/changeInfo';
import getToken from '../../api/getToken';

//Components thay đổi thông tin
export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const user = this.props.navigation.getParam('user');
        this.state = { 
            txtName: user.name, 
            txtAddress: user.address, 
            txtPhone: user.phone 
        };
    }

    // Thay đổi thông tin người dùng và truyền lên database
    change() {
        const {txtName, txtAddress, txtPhone} = this.state;
        getToken()
        .then(token => {
            changeInfo(token, txtName, txtPhone, txtAddress);
        })
        .then(user => {
            alert("Thay doi thanh cong");
            this.props.navigation.goBack();
        })
        .catch(e => console.log(e));
    }

    render() {
        const {
            wrapper, header, headerTitle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { txtName, txtAddress, txtPhone } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <Text style={headerTitle}>User Infomation</Text>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={txtName}
                        onChangeText={txtName => this.setState({ ...this.state, txtName })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={txtAddress}
                        onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={txtPhone}
                        onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
                    />
                    <TouchableOpacity 
                        style={signInContainer} 
                        onPress = {
                            this.change.bind(this)
                    }>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        flex: 1, 
        backgroundColor: '#fff' 
    },
    header: { 
        flex: 1, 
        backgroundColor: '#2ABB9C', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row', 
        paddingHorizontal: 10 
    },
    headerTitle: { 
        fontFamily: 'Avenir', 
        color: '#fff', 
        fontSize: 20 
    },
    body: { 
        flex: 10, 
        backgroundColor: '#F6F6F6', 
        justifyContent: 'center' 
    },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', 
        fontFamily: 'Avenir', 
        fontWeight: '600', 
        paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});
