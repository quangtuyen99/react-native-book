// Lấy trang order dựa vào email của người dùng
const orderHistory = (token) => (
    fetch('http://10.20.83.42:8080/api/order_history.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

export default orderHistory;