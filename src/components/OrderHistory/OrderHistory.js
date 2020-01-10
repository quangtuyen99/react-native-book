import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView
} from 'react-native';
import orderHistory from '../../api/getOrderHistory';
import getToken from '../../api/getToken';

// Components đơn hàng
export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { arrOrder: [] };
    }

    // Lấy token từ email người dùng sau đó truyền vào mảng đon hàng
    componentDidMount() {
        getToken()
            .then(token => orderHistory(token))
            .then(arrOrder => this.setState({ arrOrder }))
            .catch(err => console.log(err));
    }

    render() {
        const { wrapper, header, headerTitle, body, orderRow, contain, orderStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>

                    <Text style={headerTitle}>Order History</Text>
                </View>
                <View style={body}>
                    <ScrollView>
                        {this.state.arrOrder.map(e => (
                            <View style={orderRow} key={e.id}>
                                <View style={contain}>
                                    <Text style={orderStyle}>Order id:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>ORD{e.id}</Text>
                                </View>
                                <View style={contain}>
                                    <Text style={orderStyle}>OrderTime:</Text>
                                    <Text style={{ color: '#C21C70' }}>{e.date_order}</Text>
                                </View>
                                <View style={contain}>
                                    <Text style={orderStyle}>Status:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{e.status === '0' ? "Chưa giao" : "Đã giao"}</Text>
                                </View>
                                <View style={contain}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{e.total}VND</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

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
        backgroundColor: '#F6F6F6'
    },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }, 
    contain: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    }, 
    orderStyle: { 
        color: '#9A9A9A', 
        fontWeight: 'bold' 
    }
});