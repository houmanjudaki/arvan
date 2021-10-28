import axios from 'axios';
const post = {
  namespaced:true,
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
    },
    newPost(state, post) {
      state.posts.unshift(post);
    },
    updatePost(state, updatePost) {
      const index= state.posts.findIndex(post=>post.id==updatePost);
      if(index != -1){
        state.posts.splice(index,1,updatePost);
      }
    },
    removePost(state , id){
      state.posts = state.posts.filter(post => post.id!= id);
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
    async storePost({ commit }, title) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
          title:title
        });
        commit('newPost', response.data);
        console.log(response, commit);
      } catch (error) {
        console.log(error);
      }
    },
    async updatePost({ commit }, post) {
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${post.id}`, {
          title:post.title,
          id:post.id
        });
        console.log(response);
        commit('updatePost', response.data);
        console.log(response, commit);
      } catch (error) {
        console.log(error);
      }
    },
    async deletePost({ commit }, id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            
        commit('removePost', id );
            
      } catch (error) {
        console.log(error);
      }
    }
  }
   
};
export default post;
