<template>
  <div class="d-flex justify-content-center px-4">
    <div>
      <span class="New-Article">
        New Article
      </span>
      <div>
        <form @submit.prevent="storePost">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group ">
            <label for="title">Title </label>
            <input
              id="title"
              v-model="title"
              class="form-control Rectangle-195"
              type="text"
              placeholder="Title"
            >
            <div class="form-text text-danger">
              {{ titleErrorText }} 
            </div>
          </div>
          <div class="form-group my-3">
            <label for="title">Description </label>
            <input
              id="description"
              class="form-control Rectangle-195"
              type="text"
              placeholder="Description"
            >
          </div>
          <div class="form-group my-4 ">
            <label for="message">Body</label>
            <textarea
              id="message"
              class="form-control Rectangle-196"
              rows="3"
            />
          </div>
          <button
            class="btn btn-primary btn-block my-3 "
            type="submit"
          >
            Submit
           </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div>
      <div class="form-group">
        <label
          for="tags"
          class="R334"
        >Tags </label>
        <input
          id="title"
          class="form-control Rectangle-334"
          type="text"
          placeholder="Tags"
        >
      </div>
      <div class="Rectangle-197">
        <div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div><div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div><div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div><div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div><div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div><div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div><div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div><div class="form-check py-2">
          <input
            id="flexCheckDefault"
            class="form-check-input"
            type="checkbox"
            value=""
          >
          <label
            class="form-check-label"
            for="flexCheckDefault"
          >
            Tag
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const title = ref('');
    const titleErrorText = ref('');
    
    function storePost() {
      if (title.value == '') {
        titleErrorText.value = 'Title is required';
      } else {
        titleErrorText.value = '';
        store.dispatch('post/storePost', title.value);
      }
    }
    return {
      storePost,
      title,
      titleErrorText
    };
  }


};
</script>

<style>
.New-Article {
 
  font-family: HelveticaNeue;
 
  color: #000;
}

</style>
