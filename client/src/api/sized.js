import axios from 'axios';

export const createSized = async (data) => {
    const response = await axios.post('/api/sized', data);

    return response;
};