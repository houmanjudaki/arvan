<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9 ">
        <div class="row">
          <table class="">
            <thead class="Rectangle-27">
              <tr>
                <th scope="col">
                  #
                </th>
                <th scope="col">
                  Title
                </th>
                <th scope="col">
                  Author
                </th>
                <th scope="col">
                  Tags
                </th>
                <th scope="col">
                  except
                </th>
                <th scope="col">
                  Created
                </th>
              </tr>
            </thead>
            <tbody
              v-for="post in posts.slice(0,20)"
              :key="post.id"
            >
              <tr>
                <th scope="row">
                  {{ post.id }}
                </th>
                <td>{{ post.title }}</td>
                <td>{{ post.id }}</td>
                <td>@mdo</td>
                <td>{{ post.userId }}</td>
                <td>btn </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const posts = computed(() => store.getters.allPosts);

    function fetchPosts() {
      store.dispatch('fetchPosts');
    }
    fetchPosts();

    return {
      posts
    };
  }
};
</script>
<style scoped>
  .Rectangle-27 {
  width: 1130px;
  height: 40px;
  margin: 27px 30px 15px;
  padding: 10px 29px 0 1px;
  background-color: #eceeef;
}
</style>
