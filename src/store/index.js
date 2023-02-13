import { createStore } from 'vuex';
import users from '@/store/modules/users.js';
import courses from '@/store/modules/courses.js';

const debug = process.env.NODE_ENV !== 'production';

export const store = createStore({
    modules: {
        users: {
            namespaced: true,
            ...users
        },
        courses: {
            namespaced: true,
            ...courses
        }
    },
    strict: debug
});
