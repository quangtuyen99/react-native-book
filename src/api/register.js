// Đăng kí thông tin người dùng
const register = (email, name, password) => (
    fetch('http://10.20.83.42:8080/api/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    })
    .then(res => res.text())
);

export default register;