import axios from 'axios';

export const createGold = async (data) => {
    const response = await axios.post('/api/gold', data);

    return response;
};