import axios from 'axios';

export const createSized = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/sized', data, config);

    return response;
};

export const getSizes = async () => {
    const response = await axios.get('/api/sized');

    return response;
};