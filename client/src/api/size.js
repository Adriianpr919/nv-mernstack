import axios from 'axios';

export const createSize = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/size', formData, config);

    return response;
};

export const getSize = async () => {
    const response = await axios.get('/api/size');

    return response;
};