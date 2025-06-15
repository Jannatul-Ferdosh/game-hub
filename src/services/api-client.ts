import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1654a31ddfa04e10b58cc5c36d285f07'
    }
})