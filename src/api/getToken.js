// Lấy Token từ sau khi đã lưu từ JSon Web Token
import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try{
        const value = AsyncStorage.getItem('@token');
        if(value != null) {
            return value;
        }
        return '';
    } catch(e) {
        return '';
    }
};

export default getToken;