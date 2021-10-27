import axios from 'axios';
import { createStore } from 'vuex';
const store = createStore({
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts;
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setPosts', response.data);
                
      } catch (error) {
        console.log(error);
      }
    },
    async storePosts({ commit }, title) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
          title:title
        });
        // commit('setPosts', response.data);
        console.log(response, commit);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
export default store;
