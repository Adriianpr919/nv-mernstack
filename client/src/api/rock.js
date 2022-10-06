import axios from 'axios';

export const createRock = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/rock', data, config);

    return response;
};

export const getStones = async () => {
    const response = await axios.get('/api/rock');

    return response;
};