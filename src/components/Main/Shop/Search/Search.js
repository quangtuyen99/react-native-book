import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, RefreshControl, ListView } from 'react-native';
import initData from '../../../../api/initData';
import list from '../../../list';

// Component tìm kiếm
export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        // Khai báo listProduct rỗng
        this.state = {
            list: [],
            isLoading: false,
            page: 1
        };
    }

    componentDidMount() {
        this.getData();
    }
    // Lấy dữ liệu
    getData = () => {
        this.setState({ isLoading: true })
        initData()
            .then((responseJson) => {
                this.setState({
                    list: responseJson,
                });
            })
            .finally(() => { this.setState({ isLoading: false }) })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <View></View>
                        <Text style={styles.titleStyle}>Book</Text>
                        <View></View>
                    </View>

                    <FlatList
                        data={this.state.list}
                        renderItem={({ item }) => (
                            <View style={styles.productContainer}>
                                <Image
                                    source={{ uri: 'http://10.20.83.42:8080/api/images/product/' + item.link }}
                                    style={styles.productImage}
                                />
                                <View style={styles.productInfo}>
                                    <Text style={styles.txtName}>{item.name}</Text>
                                    <Text style={styles.txtPrice}>{item.price}</Text>
                                    <Text style={styles.txtNXB}>{item.p_company}</Text>
                                    <View style={styles.lastRowInfo}>

                                        <View />
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate("Detail", {
                                                bookDetail: item
                                            })
                                        }}
                                            navigation={this.props.navigation}
                                        >
                                            <Text>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        onRefresh={this.getData}
                        refreshing={this.state.isLoading}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 10
    },
    header: {
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingHorizontal: 10
    },
    titleStyle: {
        color: '#B10D65',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopColor: '#F0F0F0',
        borderRightColor: '#fff',
        borderLeftColor: '#fff',
        borderBottomColor: '#fff',
        borderWidth: 1,
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15
    },
    productImage: {
        width: 70,
        height: 70 * 943 / 600
    },
    lastRowInfo: {
        flexDirection: 'row'
    },
    txtName: {
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        color: '#B10D65',
    },
    txtNXB: {

    },
    txtShowDetail: {
        color: '#B10D65'
    }
});