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
    }
  }
});
export default store;
