import Checklist from "@/pages/checklist.vue";
import Login from "@/pages/login.vue";


export default [
    {
        path: '/',
        component:  Login
    },
    {
        path: '/checklist',
        component: Checklist
    }
]