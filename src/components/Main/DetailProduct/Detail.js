import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import global from '../../../components/global';
export default class Detail extends Component {

    horray() {
        alert("Thêm vào giỏ hàng thành công");
    }
    // Component thông tin chi tiết sản phẩm
    render() {
        const bookDetail = this.props.navigation.getParam('bookDetail');
        return (
            <View style={styles.container}>
                <ScrollView style={styles.productDetail}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={{uri: 'http://10.20.83.42:8080/api/images/product/' + bookDetail.link}}
                            style={styles.productDetailImg} />
                    </View>
                    <View style={styles.productDetailContent}>
                        <Text style={styles.productDetailName}>{bookDetail.name}</Text>
                        <Text style={styles.productDetailPrice}>{bookDetail.price}VND</Text>
                    </View>
                    <View style={styles.productDetailContent}>
                        <Text style={{ color: '#333', fontSize: 16, fontWeight: 'bold' }}>Giới thiệu sách</Text>
                        <Text style={styles.productDetailInfo}>
                            {bookDetail.description}
                        </Text>
                    </View>
                </ScrollView> 
                <View style={styles.bottomOption}> 
                    <TouchableOpacity style={styles.cartTouch} onPress = {()=>{
                        this.horray()
                        global.array.push({
                            id: global.array.length + 1,
                            name: bookDetail.name,
                            price: bookDetail.price,
                            link: bookDetail.link,
                            quantity: 1,
                            idProduct: bookDetail.id
                        })
                    }}> 
                        <Text style={styles.cartText}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )}
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productDetail: {
        marginTop: 50,
    },
    productDetailImg: {
        
        width: 180,
        height: 300
    },
    productDetailContent: {
        marginVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    productDetailName: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    productDetailPrice: {
        fontSize: 18,
        color: 'red'
    },
    productDetailInfo: {
        marginVertical: 10,
        fontSize: 15
    },
    /* Cart */
    bottomOption: {
        height: 50,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        
    },
    cartTouch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#34B089'
    },
    cartText: {
        color: '#fff',
    }
});