import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, FlatList } from 'react-native';

// Lấy số liệu điện thoại
const { width, height } = Dimensions.get('window');

export default class Category extends Component {

    constructor(props) {
        super(props);
        // Khai báo listProduct rỗng
        this.state = {
            pointer: 0,
            banners: [
               {
                   image : 'category.jp'
               }
            ]
        };
    }
    // Tăng thứ tự mảng
    changeImage() {
        let pointer = this.state.pointer;
        pointer = pointer + 1;
        if (pointer == this.state.banners.length) {
            pointer = 0;
        }
        this.setState({
            pointer: pointer
        });
    }
    // Hàm lấy mảng hình ảnh và thay đổi thứ tự
    componentDidMount() {
        fetch('http://10.20.83.42:8080/api/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    banners: responseJson
                });
            });
        this._interval = setInterval(() => {
            this.changeImage();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }
    //Component thứ hai trong Home Component
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.viewText} >
                    <Text style={styles.textStyle}> CATEGORY </Text>
                </View>

                <View style={styles.viewBanner}>
                    <Image
                        style = {{ flex: 1 }}
                        source = {{ uri: 'http://10.20.83.42:8080/api/images/type/' + this.state.banners[this.state.pointer].image }}
                    >
                    </Image>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 885) * 294;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.25,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    bannerImage: {
        height: imageHeight,
        width: imageWidth,
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
    },

});