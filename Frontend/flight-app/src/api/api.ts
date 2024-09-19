import axios from "axios";

const API_BASE_URL = 'https://api.schiphol.nl/public-flights/flights';

export const getFlights = async () => {
    try {
        const response = await axios.get(API_BASE_URL, {
            headers: {
                'ResourceVersion': 'v4',
                'app_id': '02d54c6c',
                'app_key': 'decb7619599ad932f61cfe8de2c63ee0'
            }
        });
        return response.data.flights;
    } catch (err) {
        console.error("Error Call API:", err);
        return [];
    }
};