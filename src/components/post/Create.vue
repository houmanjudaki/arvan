<template>
  <div class="row">
    <div class="col">
      <span class="New-Article">
        New Article
      </span>
      <div col-lg-4>
        <form @submit.prevent="storePost">
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
        </form>
      </div>
    </div>

    <div class="col">
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
        store.dispatch('storePost', title.value);
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
  width: 204px;
  height: 47px;
  margin: 25px 666px 18px 30px;
  font-family: HelveticaNeue;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
.Rectangle-195 {
  width: 848px;
  height: 40px;
  margin: 8px 0 0;
  padding: 11px 805px 11px 12px;
}
.Rectangle-196 {
   width: 847px;
  height: 207px;
  margin: 8px 0 0;
}
.Rectangle-334 {
  width: 252px;
  height: 40px;
  margin: 14px 29px 6px 31px;
  padding: 11px 180px 11px 12px;
 
}
.R334 {
  margin: 14px 29px 6px 31px;
  padding: 11px 180px 11px 12px;
 
}
.Rectangle-334 {
  width: 252px;
  height: 40px;
  margin: 14px 29px 6px 31px;
  padding: 11px 180px 11px 12px;
  border-radius: 4px;
  border: solid 1px #ddd;
  background-color: #fff;
}
.Rectangle-197 {
  width: 251.5px;
  height: 355px;
  margin: 14px 29.5px 15px 31px;
  padding: 15px 187.5px 16px 17px;
  border-radius: 4px;
  border: solid 1px #ddd;
  background-color: #fff;
}
</style>
