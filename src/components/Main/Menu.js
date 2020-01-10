import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import profileIcon from '../../Media/temp/profile.png'
import global from '../global'
import saveToken from '../../api/saveToken';
import refreshToken from '../../api/refreshToken';
// Component Menu
export default class Menu extends Component {
    // Gọi hàm refresh Token sau mỗi 30 phtu1
    componentDidMount() {
        setInterval(refreshToken, 30000);
    }

    static navigationOptions = {
        title: "Menu"
    };
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false,
            user: null
        };
        global.onSignIn = this.onSignIn.bind(this);
    }
    // Lấy ra mảng người dùng
    onSignIn(user) {
        this.setState({user});
    }
    // Đặt lại mảng người dùng khi đăng xuất
    onSingnOut() {
        this.setState({user: null});
        saveToken('');
    }
    render() {
        // Giao diện khi chưa đâng nhập
        const LogOut = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity 
                    style={styles.btnStyle}
                    onPress={() => {
                        this.props.navigation.navigate("Authentication")
                    }}>
                    <Text style={styles.btnText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        //Giao diện khi đã đăng nhập
        const LogIn = (
            <View style={styles.viewTextSignInStyle}>
                <Text style={styles.textSignIn}>{this.state.user ? this.state.user.name : ''}</Text>
                <View>
                    <TouchableOpacity 
                        style={styles.btnSignInStyle} 
                        onPress={() => {
                            this.props.navigation.navigate("OrderHistory")
                        }}>
                        <Text style={styles.btnTextSignInStyle}>Order History</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.btnSignInStyle}
                        onPress={() => {
                            this.props.navigation.navigate("ChangeInfo", {
                                user: this.state.user
                            })
                    }}>
                        <Text style={styles.btnTextSignInStyle}>Change Info</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.btnSignInStyle}
                        onPress = {this.onSingnOut.bind(this)}
                    >
                        <Text style={styles.btnTextSignInStyle}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
        // Kiểm tra xem có đang đâng nhập hay không dựa vào mảng người dùng
        const Main = this.state.user ? LogIn : LogOut;
        return (
            <View style={styles.container}>
                <Image source={profileIcon} style={styles.profile} />
                {Main}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 65
    },
    btnText: {
        color: '#34B089',
        fontSize: 18
    },
    btnSignInStyle: {
        height: 50,

        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        width: 200,
        marginBottom: 10
    },
    btnTextSignInStyle: {
        color: '#34B089',
        fontSize: 15,
        textAlign: 'left',
        paddingLeft: 10
    },
    viewTextSignInStyle: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textSignIn: {
        fontSize: 17,
        color: '#fff'
    }
});