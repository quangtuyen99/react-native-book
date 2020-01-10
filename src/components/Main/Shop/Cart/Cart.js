import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, FlatList
} from 'react-native';
import global from '../../../../components/global';
import sendOrder from '../../../../api/sendOrder';
import getToken from '../../../../api/getToken';
const products = global.array;

//Components giỏ hàng
class ListItem extends Component {

    render() {
        const {
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer, viewStyle, textStyle } = styles;
        const { item } = this.props;
        return (
            <View style={product}>
                <Image source={{ uri: 'http://10.20.83.42:8080/api/images/product/' + item.link }} style={productImage} />
                <View style={[mainRight]}>
                    <View style={viewStyle}>
                        <Text style={txtName}>{item.name}</Text>
                        <TouchableOpacity onPress={this.props.onDelete}>
                            <Text style={textStyle}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={txtPrice}>{item.price}VND</Text>
                    </View>
                    <View style={productController}>
                        <View style={numberOfProduct}>
                            <TouchableOpacity onPress={this.props.onSubtract}>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text>{item.quantity}</Text>
                            <TouchableOpacity onPress={this.props.onAdd}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default class Cart extends Component {
    state = {
        products,
    };

    // Truyền đon hàng vào database
    async onSendOrder() {
        try {
            if(this.state.products.length == 0) {
                alert("Giỏ hàng trống");
            }
            else {
                alert("Bạn đã đặt hàng thành công");
                const token = await getToken();
                const arrayDetail = this.state.products.map(e => ({ 
                    id: e.idProduct,
                    quantity: e.quantity
                }));
                const kq = await sendOrder(token, arrayDetail);
                global.array.length = 0;
            }
        } catch(e) {
            console.log(e);
        }
    }

    // Giảm số lượng
    onSubtract = (item, index) => {
        const products = [...this.state.products];
        if (products[index].quantity > 1) {

            products[index].quantity -= 1;
        }
        else {
            return this.deleteItemById(products[index]);
        }
        this.setState({ products });
        global.array = products;
    }

    // Tăng số lượng
    onAdd = (item, index) => {
        const products = [...this.state.products];
        products[index].quantity += 1;
        this.setState({ products });
        global.array = products;
    }

    // Xóa 
    deleteItemById = (item) => {
        var products = [...global.array]
        let index = products.indexOf(item);
        products.splice(index, 1);
        global.array = products;
        this.setState({ products: global.array });
    }


    render() {
        const { products } = this.state;
        let totalQuantity = 0;
        let totalPrice = 0;
        products.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.price;
        })

        const { main, checkoutButton, checkoutTitle, wrapper } = styles;
        return (
            <View style={wrapper}>
                <ScrollView style={main}>
                    <FlatList
                        data={this.state.products}
                        renderItem={({ item, index }) => (
                            <ListItem
                                item={item}
                                onSubtract={() => this.onSubtract(item, index)}
                                onAdd={() => this.onAdd(item, index)}
                                onDelete={() => this.deleteItemById(item)}
                            />
                        )}
                        keyExtractor={item => item._id}
                    />
                </ScrollView>
                <TouchableOpacity 
                    style={checkoutButton} 
                    onPress = {this.onSendOrder.bind(this)
                }>
                    <Text style={checkoutTitle}>TOTAL {totalPrice}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    viewStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textStyle: {
        fontFamily: 'Avenir',
        color: '#969696'
    }
});
