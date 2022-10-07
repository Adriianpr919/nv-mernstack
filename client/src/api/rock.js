import axios from 'axios';

export const createRock = async (data) => {
    const response = await axios.post('/api/rock', data);

    return response;
};