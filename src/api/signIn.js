// Kiểm tra đăng nhập
const signIn = (email, password) => (
    fetch('http://10.20.83.42:8080/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

export default signIn;