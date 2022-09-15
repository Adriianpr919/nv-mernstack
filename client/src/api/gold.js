import axios from 'axios';

export const createGold = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/gold', formData, config);

    return response;
};

export const getGold = async () => {
    const response = await axios.get('/api/gold');

    return response;
};