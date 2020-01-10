//Hàm đổi thông tin
const changeInfo = (token, name, phone, address) => (
    fetch('http://10.20.83.42:8080/api/change_info.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token, name, phone, address })
    })
    .then(res => res.json())
);

export default changeInfo;