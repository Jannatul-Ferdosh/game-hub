import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f9c37e2e37a84083aff2d0319868ad7b'
    }
})