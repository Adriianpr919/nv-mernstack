import axios from 'axios';

export const createGold = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/category2', formData, config);

    return response;
};