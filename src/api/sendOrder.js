// Gửi trang order lên database sau khi thêm vào giỏ hàng
const sendOrder = (token, arrayDetail) => (
    fetch('http://10.20.83.42:8080/api/cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token, arrayDetail })
    })
    .then(res => res.text())
);

export default sendOrder;