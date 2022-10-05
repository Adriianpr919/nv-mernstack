import axios from 'axios';

export const createSize = async (data) => {
    const response = await axios.post('/api/size', data);

    return response;
};