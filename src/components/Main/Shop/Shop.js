import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import homeIconS from '../../../Media/appIcon/home0.png';
import homeIcon from '../../../Media/appIcon/home.png';
import contactIconS from '../../../Media/appIcon/contact0.png';
import contactIcon from '../../../Media/appIcon/contact.png';
import searchIconS from '../../../Media/appIcon/search.png';
import searchIcon from '../../../Media/appIcon/search0.png';
import cartIconS from '../../../Media/appIcon/cart0.png';
import cartIcon from '../../../Media/appIcon/cart.png';
import global from '../../global';
//Components Shop chứa các tabbar navigation
export default class Shop extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            cartArray: [],
            search: [],
            products: []
        };
        global.gotoSearch = this.gotoSearch.bind(this);
        global.gotoHome = this.gotoHome.bind(this);
    }
    componentDidMount() {
        fetch('http://10.20.83.42:8080/api/listbooks.php')
        .then((response) => response.json())
        .then((responseJson) => {
            const {product} = responseJson;
            this.setState({
                products: product,
            });
        });
    }

    openMenu() {
        const {open} = this.props;
        open();
    }
    
    gotoHome() {
        this.setState({ selectedTab: 'home'});
    }

    gotoSearch() {
        this.setState({ selectedTab: 'search'});
    }
   
    render() {
        return (
            //Component Shop
            //Nơi chuyển qua các Component con khác (Home, Cart, ...)
            <View style = {{ flex: 1}}>                               
                
                <Header onOpen = {this.openMenu.bind(this)}/>
                
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={homeIcon} />}
                        renderSelectedIcon={() => <Image source={homeIconS} />}
                        selectedTitleStyle = {{color: '#34B089'}}                  
                        onPress={() => this.setState({ selectedTab: 'home' })}>                       
                        <Home navigation={this.props.navigation} products = {this.state.products}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"     
                        renderIcon={() => <Image source={cartIcon} />}
                        renderSelectedIcon={() => <Image source={cartIconS} />} 
                        selectedTitleStyle = {{color: '#34B089'}}  
                        badgeText={global.array.length}             
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart/>
                    </TabNavigator.Item>  

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={searchIcon} />}
                        renderSelectedIcon={() => <Image source={searchIconS} />} 
                        selectedTitleStyle = {{color: '#34B089'}}                    
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search navigation={this.props.navigation} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"  
                        renderIcon={() => <Image source={contactIcon} />}
                        renderSelectedIcon={() => <Image source={contactIconS} />} 
                        selectedTitleStyle = {{color: '#34B089'}}                  
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>            
            </View>
        );
    }
}

