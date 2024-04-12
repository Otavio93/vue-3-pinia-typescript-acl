<script lang="ts">
    import { ref } from 'vue';
    import { useUsersStore } from '../../stores/users';

    export default {
        setup() {
            const email = ref('')
            const password = ref('')
            const usersStore = useUsersStore()

            const auth = () => {
                
                const data = usersStore.login(email.value, password.value)
                    .then(res => {
                        return res.data
                    })
                
                console.log(
                    data
                )
            }

            return {
                email,
                password,
                auth
            }
        }
    }
</script>
<template>
    <div>
        Login Page
    </div>
    <div>
        <form action="#" method="post" @submit.prevent="auth">
            <input type="email" name="email" placeholder="email" v-model="email">
            <input type="password" name="password" placeholder="senha" v-model="password">
            <button type="submit">Login</button>
        </form>
        <a href="/forgot-password">Esqueci a senha</a>
    </div>
</template>