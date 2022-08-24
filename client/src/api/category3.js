import axios from 'axios';

export const createStone = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/category3', formData, config);

    return response;
};