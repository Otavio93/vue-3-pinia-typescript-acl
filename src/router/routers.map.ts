import AuthTemplate from '../layouts/AuthTemplate.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import ForgotPassword from '../pages/auth/ForgotPassword.vue'
import HomeAdmin from '../pages/admin/home/HomeAdmin.vue'

export default [
    {
        path: '/',
        component: AuthTemplate,
        children: [
            {
                path: '',
                name: 'auth.login',
                component: LoginPage
            },
            {
                path: '/forgot-password',
                name: 'auth.forgot',
                component: ForgotPassword
            }
        ]
    },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomePage,
    // },
    {
        name: 'admin',
        component: HomeAdmin,
        path: '/admin'
    },
]

