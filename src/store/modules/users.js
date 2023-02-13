import { axiosService } from '../../api/axiosService';

const state = () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || ''
});

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    setToken(state, payload) {
        state.token = payload;
    }
};

const actions = {
    async userLogin({ commit }, user) {
        await axiosService
            .post('/login', {
                login: user.login,
                password: user.password
            })
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem(
                    'token',
                    JSON.stringify(response.data?.api_token)
                );
                commit('setUser', response.data?.data);
                commit('setToken', response.data?.api_token);

                return response;
            })
            .catch((error) => console.log(error));
    }
};

const getters = {
    getUser: (state) => state.user || {},
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token
};

export default {
    state,
    getters,
    actions,
    mutations
};
