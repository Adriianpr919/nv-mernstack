import axios from 'axios';

export const createGolden = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/golden', data, config);

    return response;
};

export const getGolds = async () => {
    const response = await axios.get('/api/golden');

    return response;
};