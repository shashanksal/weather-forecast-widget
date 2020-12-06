import { makeRequest } from './requestController';

export const makeCityFetchCall = async (url, method, data) => {
    return makeRequest(url, method, data)
        .then(res => {
            return {
                error: res.error,
                response: res.response[0]
            };
        })
}