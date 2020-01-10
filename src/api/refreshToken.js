
import saveToken from './saveToken';
import getToken from './getToken';
// Tạo mới 1 token
const getNewToken = (token) => (
    fetch('http://10.20.83.42:8080/api/refresh_token.php', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.text())
    .then(token => saveToken(token))
)
// Lưu email vào 1 token mới
const refreshToken = async () => {
    try {
        const token = await getToken();
        if(token === '' || token === 'TOKEN_KHONG_HOP_LE') {
            console.log('Chua co token');
        }
        const newToken = await getNewToken(token);
        await saveToken(newToken);
    }  catch {

    }
}
export default refreshToken;