import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer'
import Shop from './Shop/Shop';
import Menu from './Menu';
import checkLogin from '../../api/check_login';
import getToken from '../../api/getToken';
import global from '../global';
// Hàm chứa các components Shop, Menu
export default class Main extends Component {
    // Hàm đóng drawer
    closeControlPanel = () => {
        this.drawer.close();
    };
    // Hàm mở drawer
    openControlPanel = () => {
        this.drawer.open();
    };
    // Lấy thông tin đâng nhập
    componentDidMount() {
        getToken()
        .then(token => checkLogin(token))
        .then(res => global.onSignIn(res.user))
        .catch(e => console.log(e));
    }
    render() {
        return(
            //Menu ben trai 
            <Drawer
                ref={(ref) => {this.drawer   = ref;}}
                content = {
                    <Menu navigation = {this.props.navigation}
                />}
                openDrawerOffset={0.5}
                tapToClose = {true}
            >    
                <Shop open = {this.openControlPanel.bind(this)}
                    navigation = {this.props.navigation}
                />
            </Drawer>        
        );
    }
}