import axios from "axios";

class HttpClient {

    get(url: String, headers: { [key: string]: any }) {
        // @ts-ignore
        return axios.get(url, { headers }).then(this.extractResponseBody);
    }

    post(url: String, data: { [key: string]: any }, headers: { [key:string]: any }) {
        // @ts-ignore
        return axios.post(url, data, { headers });
    }

    private extractResponseBody(response: any) {
        if (response.data) {
            return response.data
        }
        return response;
    }
}

export default HttpClient;