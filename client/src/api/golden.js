import axios from 'axios';

export const createGolden = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/golden', formData, config);

    return response;
};

export const getGoldens = async () => {
    const response = await axios.get('/api/golden');

    return response;
};