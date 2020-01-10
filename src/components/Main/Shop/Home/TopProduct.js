import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import global from '../../../../components/global';
import initData from '../../../../api/initData';

//Components chứa các sản phẩm
export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        // Khai báo listProduct rỗng
        this.state = {
            list: [],
            cartArray: []
        };
       
    }

    //Lấy dữ liệu
    componentDidMount() {
        initData()
        .then((responseJson) => {
            const {cart} = responseJson;
            this.setState({
                list: responseJson,
                cartArray: cart
            });
        });
    }
    
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.titleConatiner}>
                    <Text style={styles.title}>TOP PRODUCT</Text>
                </View>

                <View style={styles.body}>
                    <FlatList
                        data={this.state.list}
                        renderItem={({ item }) => (
                            <View style={styles.productView} >
                                <TouchableOpacity style={styles.productTouch} 
                                    onPress={() =>{
                                        this.props.navigation.navigate("Detail", {
                                                bookDetail: item
                                    })  
                                }} > 
                                    <Image 
                                        source = {{uri: 'http://10.20.83.42:8080/api/images/product/' + item.link}} 
                                        style = {styles.productImage}
                                    />
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productPrice}>{item.price}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.detailTouch} 
                                    onPress={() =>{
                                        this.props.navigation.navigate("Detail", {
                                                bookDetail: item
                                    })  
                                }} >
                                    <Text style={{ color: 'white' }}>Xem chi tiết</Text>
                                </TouchableOpacity>
                            </View>)}
                        keyExtractor={item => item.id}
                        numColumns={3}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        margin: 10,

    },
    titleConatiner: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        backgroundColor: '#fff',
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    body: {

    },
    productView: {
        flex: 1 / 3,
        borderRadius: 2,
        margin: 4,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4
    },
    productTouch: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: 80,
        height: 100,
        marginTop: 10,
        marginBottom: 15
    },
    productName: {
        fontSize: 15,
    },
    productPrice: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8
    },
    detailTouch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#34B089',

    }

});