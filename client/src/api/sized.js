import axios from 'axios';

export const createSized = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/sized', formData, config);

    return response;
};

export const getSizeds = async () => {
    const response = await axios.get('/api/sized');

    return response;
};