import axios from 'axios';

export const signup = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/auth/signup', data, config);

    return response;
};

export const signing = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('/api/auth/signing', data, config);

    return response;
};