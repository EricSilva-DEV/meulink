import axios from 'axios';

export const key = 'd87702216ea62c30f42858652e38a082b5a0d28c';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api