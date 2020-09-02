import {getLocalUser} from './helpers/auth';
import Vue from 'vue';
import Vuex from 'vuex';  
Vue.use(Vuex)
const user = getLocalUser();
export default new Vuex.Store({
    state:{
        currentUser : user,
        auth_error : null,
        students : [],
    },
    getters: {
        currentUser(state){
            return state.currentUser
        },
        students(state){
            return state.students
        }
    },
    mutations: {
        login(state){
            state.auth_error =null
        },
        loginSuccess(state,payload){
            state.currentUser = Object.assign({},payload.user,{token:payload.access_token});
            localStorage.setItem('user', JSON.stringify(state.currentUser));
        },
        loginFailed(state,payload){
            state.auth_error = payload.error;
        },
        logout(state){
            localStorage.removeItem('user');
            state.currentUser = null;
        },
        updateStudents(state,payload){
            state.students = payload;
        }
    },
    actions:{
        login(context){
            context.commit('login');
        },
        getStudents(context){
            axios.get('/api/students')
            .then((result) => {
                context.commit('updateStudents', result.data.students)
            }).catch((err) => {
                if(err.response.status == 401){
                    context.commit('logout');
                    router.push('/admin/login'); 
                }
            });
        }
    }
})