import axios from 'axios';

export const createGolden = async (data) => {
    const response = await axios.post('/api/golden', data);

    return response;
};