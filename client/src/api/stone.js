import axios from 'axios';

export const createStone = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/stone', formData, config);

    return response;
};

export const getStone = async () => {
    const response = await axios.get('/api/stone');

    return response;
};