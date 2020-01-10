// Hàm đổ dữ liệu về từ table product
const initData = () => (
    fetch('http://10.20.83.42:8080/api/1.php')
    .then((response) => response.json())
);
export default initData;