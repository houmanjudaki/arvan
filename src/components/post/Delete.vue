<template>
  <li>
    <button
      type="button"
      class="btn btn-primary dropdown-item"

      @click="deletePost"
    >
      Delete
    </button>
  </li>
  <!-- <div
    id="exampleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="exampleModalLabel"
            class="modal-title"
          >
            Modal title
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div> -->
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
