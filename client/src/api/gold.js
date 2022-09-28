import axios from 'axios';

export const createGolden = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/gold', formData, config);

    return response;
};

export const getGolds = async () => {
    const response = await axios.get('/api/gold');

    return response;
};