//Kiểm tra đâng nhập xem đã hết hạn chưa dựa vào thời gian của token 
const checkLogin = (token) => (
    fetch('http://10.20.83.42:8080/api/check_login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

export default checkLogin;