import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store/index.js';

const ifNotAuthenticated = (to, from, next) => {
    const isAuthenticated = store.getters['users/isAuthenticated'];

    if (isAuthenticated) {
        next();

        return;
    }

    next('/login');
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/CoursesListView.vue'),
            beforeEnter: ifNotAuthenticated,
            meta: {
                layout: 'LayoutPublic'
            }
        },

        {
            path: '/course/:id',
            name: 'course',
            component: () => import('@/views/SelectedCourseView.vue'),
            beforeEnter: ifNotAuthenticated,
            meta: {
                layout: 'LayoutPublic'
            }
        },

        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue'),
            meta: {
                layout: 'LoginView'
            }
        },

        {
            path: '/:pathMatch(.*)',
            name: 'not-found',
            component: () => import('@/views/NotFoundView.vue'),
            meta: {
                layout: 'LayoutPublic'
            }
        }
    ]
});

export default router;
