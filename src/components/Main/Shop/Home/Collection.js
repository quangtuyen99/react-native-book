import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import bannerImage from '../../../../Media/temp/banner.jpg'
//Lấy số liệu của điện thoại (dài, rộng)
const {width, height} = Dimensions.get('window');

export default class Collection extends Component {
    //Component đầu tiên trong Home Component
    render() {
        return (
            <View style = {styles.wrapper}>
                <View style = {styles.viewText} >
                    <Text style = {styles.textStyle}>BOOK COLLECTION </Text>
                </View>

                <View style = {styles.viewBanner}>
                    <Image 
                        source = {bannerImage} 
                        style = {styles.bannerImage} 
                    />
                </View>
            </View>   
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 5103) * 1894;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.28,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width : 0, height : 3},
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    bannerImage: {
        height: imageHeight,
        width: imageWidth
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    viewText: { 
        flex: 1, 
        justifyContent: 'center'
    },
    viewBanner: { 
        flex: 4
    }

});