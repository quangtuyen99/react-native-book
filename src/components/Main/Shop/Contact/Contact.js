import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../../../Media/temp/logoShop.png';
import contact from '../../../../Media/temp/contact.png';
import location from '../../../../Media/temp/location.png';
import web from '../../../../Media/temp/web.png';
import email from '../../../../Media/temp/email.png';

//Component trang liên lạc
export default class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoViewStyle} >
                    <View>
                        <Image source={logo} style={styles.logoStyle} />
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Tom's Book Store</Text>
                    </View>
                </View>

                <View style={styles.contactViewStyle}>
                    <View style={styles.contactStyle}>
                        <Image source={location} style={styles.imageStyle} />
                        <View />
                        <Text style={styles.contactTextStyle}>190/5 Linh Trung, Thủ Đức</Text>
                    </View>
                    <View style={styles.contactStyle}>
                        <Image source={contact} style={styles.imageStyle} />
                        <View />
                        <Text style={styles.contactTextStyle}>0911655922</Text>
                    </View>
                    <View style={styles.contactStyle}>
                        <Image source={web} style={styles.imageStyle} />
                        <View />
                        <Text style={styles.contactTextStyle}>tiki.vn</Text>
                    </View>
                    <View style={styles.contactStyle}>
                        <Image source={email} style={styles.imageStyle} />
                        <View />
                        <Text style={styles.contactTextStyle}>phamlamquangtuyen@gmail.com</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    logoViewStyle: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logoStyle: {
        height: 200,
        width: 200
    },
    textStyle: {
        fontSize: 27,
        color: 'orange'
    },
    contactViewStyle: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 15
    },
    contactStyle: {
        flexDirection: 'row',
        borderWidth: 2,
        borderTopColor: '#F0F0F0',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderBottomColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    imageStyle: {
        height: 40,
        width: 40
    },
    contactTextStyle: {
        fontSize: 18,
        color: '#B10D65'
    }
});
