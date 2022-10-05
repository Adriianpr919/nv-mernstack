import axios from 'axios';

export const createStone = async (data) => {
    const response = await axios.post('/api/stone', data);

    return response;
};