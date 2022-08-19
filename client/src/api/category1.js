import axios from 'axios';

export const createCategory1 = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/category1', formData, config);

    return response;
};