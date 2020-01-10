import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

import book from '../../../Media/appIcon/book.png';
import icMenu from '../../../Media/appIcon/ic_menu.png';
import global from '../../global';
//Lấy thông số của điện thoại (dài, rộng)
const { height } = Dimensions.get('window');
export default class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        }
    }
    //Components topbar (thanh tìm kiếm)
    render() {
        return (
            <View style={styles.wrapper}>
                <View style = {styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source = {icMenu} style = {styles.iconStyle}/>
                    </TouchableOpacity>
                    <Text style = {styles.text}>Reading a Book</Text>
                    <Image source = {book} style = {styles.iconStyle}/>
                </View>
                <View style = {{flex: 1}}>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "What do you want to buy?"
                        onChangeText = {text => this.setState({ txtSearch: text })}
                        onFocus = {global.gotoSearch}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flex: 1
    },
    textInput: {
        height: height/20, 
        width: 350, backgroundColor: '#FFF', 
        marginBottom: 10, marginLeft: 22, 
        paddingLeft: 10, 
        paddingTop: 5
    },
    iconStyle: {
        height: 30, 
        width: 30
    },
    text: {
        fontSize: 20, 
        color: 'white'
    }
})
