<template>
  <li>
    <a
      class="dropdown-item "
      @click="deletePost"
    >Delete</a>
  </li>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props:[ 'id' ],
  setup(props) {
    const store = useStore();

    
    async function deletePost() {
      await store.dispatch('post/deletePost', props.id);
      
    }
    return {
      deletePost
      
    };
  }};
</script>

<style>

</style>
