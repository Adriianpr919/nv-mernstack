import axios from 'axios';

export const createRock = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/rock', formData, config);

    return response;
};

export const getRocks = async () => {
    const response = await axios.get('/api/rock');

    return response;
};