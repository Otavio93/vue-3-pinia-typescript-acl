import httpAdapter from "../http/HttpClientAdapter"

export default class UserGatewayHttp {
    static login(email: string, password: string) {
        return httpAdapter.post('/', {
            email: email,
            password: password
        })
    }
}