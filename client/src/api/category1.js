import axios from 'axios';

export const createSize = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/category1', formData, config);

    return response;
};

export const getCategories = async () => {
    const response = await axios.get('/api/category1');

    return response;
};