import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Các components có trong project cần chuyển trang
import Authentication from './src/components/Authentication/Authentication'
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo'
import Main from './src/components/Main/Main'
import OrderHistory from './src/components/OrderHistory/OrderHistory'
import Menu from './src/components/Main/Menu'
import Shop from './src/components/Main/Shop/Shop'
import Detail from './src/components/Main/DetailProduct/Detail'
import Cart from './src/components/Main/Shop/Cart/Cart'
import SignIn from './src/components/Authentication/SignIn'
import Home from './src/components/Main/Shop/Home/Home'

//Khai báo các components trong navigation

const AppNavigator = createStackNavigator(
    {
        Authentication: Authentication,
        ChangeInfo: ChangeInfo,
        Main: Main,
        OrderHistory: OrderHistory,
        Menu: Menu,
        Shop: Shop,
        Detail: Detail,
        Cart: Cart,
        SignIn: SignIn,
        Home: Home
    },
    {   
        // Định dạng Topbar
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
                height: 30
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        // Trang bắt đầu
        initialRouteName: "Main"
    },
);
export default createAppContainer(AppNavigator);