import axios from 'axios';
import { saveHeadlines } from './headline.service';
require('dotenv').config();

const { REUTERS_HEADLINE_ENDPOINT, REUTERS_API, REUTERS_API_KEY } = process.env;
const headlineUri: string = REUTERS_API + REUTERS_HEADLINE_ENDPOINT

axios.defaults.headers.common = {
    'Authorization': `Bearer ${REUTERS_API_KEY}`
};

const headlineParams = {
    country: 'us',
    category: 'business',
    pageSize: 1
};

export const fetchHeadlines = async () => {
    return await axios.get(headlineUri, {
        params: headlineParams
    })
    .then(res => {
        return res.data.articles;
    })
    .catch(err => {
        return err.response.data;
    });
};


