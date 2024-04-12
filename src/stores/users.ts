import { defineStore } from 'pinia'
import UserGatewayHttp from '../infra/gateway/UserGatewayHttp'

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: []
    }),
    getters: {
        hasUsers: (state) => state.users.length > 0,
    },
    actions: {
        login(email: string, password: string): Promise<any> {
            return UserGatewayHttp.login(email, password)
        }
    },
})