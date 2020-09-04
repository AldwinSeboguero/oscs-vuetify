import Login from './components/Login.vue';
import ClearanceView from './components/ClearanceView.vue';
import StudentList from './components/StudentList.vue';
import Student from './views/student/index';
import Home from './components/Home.vue';

export const routes = [
    {
        path: '/admin/login',
        component: Login,
        
        
    },
    {
        path: '/admin/home',
        component: Home,
        meta: {
            requireAuth : true
        },
    },
    {
        path: '/admin/clearance-view',
        component: ClearanceView,
    },
    {
        path: '/admin/student-list',
        component: StudentList,
    },
    {
        path: '/admin/students',
        component: Student,
        meta: {
            requireAuth : true
        },
    }

]