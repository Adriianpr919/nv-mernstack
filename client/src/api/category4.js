import axios from 'axios';

export const createProduct = async (data) => {
    const response = await axios.post('/api/category4', data);

    return response;
};