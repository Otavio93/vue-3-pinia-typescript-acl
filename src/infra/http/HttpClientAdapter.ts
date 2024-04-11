import axios, { AxiosInstance } from "axios";
import HttpClient from "./HttpClient";

class HttpClientAdapter implements HttpClient {
    private axiosInstance: AxiosInstance;
    private static instance: HttpClient | null = null;

    constructor() {
        const url = "http://localhost:8090";
        this.axiosInstance = axios.create({
            baseURL: url,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
    }

    static getInstance(): HttpClient {
        if (!this.instance) {
            this.instance = new HttpClientAdapter();
        }
        return this.instance;
    }

    get(url: string, configs?: object | undefined): Promise<any> {
        return this.axiosInstance.get(url, configs);
    }
    post(url: string, body: object, configs?: object | undefined): Promise<any> {
        return this.axiosInstance.post(url, body, configs);
    }
    put(url: string, body: object, configs?: object | undefined): Promise<any> {
        return this.axiosInstance.post(url, body, configs);
    }
    delete(url: string, configs?: object | undefined): Promise<any> {
        return this.axiosInstance.post(url, configs);
    }
}

export default HttpClientAdapter.getInstance()