import { axiosService } from '../../api/axiosService';

const state = () => ({
    courses: [],
    selectedCourse: null
});

const mutations = {
    setCourses(state, payload) {
        state.courses = payload;
    },
    setSelectedCourse(state, payload) {
        state.selectedCourse = payload;
    }
};

const actions = {
    async fetchCoursesList({ commit }, data) {
        return await axiosService
            .get('/courses', {
                params: { ...data }
            })
            .then((response) => {
                commit('setCourses', response?.data?.data);

                return Promise.resolve(response?.data);
            })
            .catch((error) => console.log(error));
    },

    async fetchSelectedCourse({ commit }, id) {
        await axiosService
            .get(`/courses/${id}`)
            .then((response) => {
                commit('setSelectedCourse', response?.data?.data);

                return response;
            })
            .catch((error) => console.log(error));
    }
};

const getters = {
    getCoursesList: (state) => state.courses,
    getSelectedCourse: (state) => state.selectedCourse
};

export default {
    state,
    getters,
    actions,
    mutations
};
