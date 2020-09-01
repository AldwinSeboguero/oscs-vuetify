import Login from './components/Login.vue';
import ClearanceView from './components/ClearanceView.vue';
import StudentList from './components/StudentList.vue';

export const routes = [
    {
        path: '/admin/login',
        component: Login,
    },
    {
        path: '/admin/clearance-view',
        component: ClearanceView,
    },
    {
        path: '/admin/student-list',
        component: StudentList,
    }
]